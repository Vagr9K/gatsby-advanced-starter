import memfs from "memfs";

import { mocked } from "ts-jest/utils";
import { GatsbyActionsMock } from "./Utils";

import {
  createFeed,
  createPageMeta,
  getFeedRoute,
  initFeedMeta,
  saveFeedPageMeta,
} from "../utils/feeds";

import {
  post as postFixture,
  config as configFixture,
  postListing as listingFixtureBase,
} from "../../../test/fixtures";

// Artificially increase the number of posts in the fixture
const listingFixture = [...listingFixtureBase, ...listingFixtureBase];

const FEED_META_DIR = `public/feed_meta/`;

// Redirect all fs API calls to a virtual FS for testing
// eslint-disable-next-line jest/unbound-method
jest.mock("fs", () => ({ ...memfs.fs, rmSync: memfs.fs.rmdirSync }));

describe("saveFeedPageMeta", () => {
  beforeEach(() => {
    memfs.vol.reset();
  });

  it("saves feed page metadata", async () => {
    expect.assertions(2);

    const testMeta = {
      current: 1,
      next: 2,
      nextCount: 5,
      prev: 0,
      prevCount: 5,
      posts: [postFixture, postFixture],
    };

    const stringifiedMeta = JSON.stringify(testMeta);

    // Init an empty feed metadata folder
    memfs.vol.fromJSON({
      [FEED_META_DIR]: null,
    });

    await saveFeedPageMeta("test", 1, testMeta); // Without FeedId
    await saveFeedPageMeta("test", 1, testMeta, "testId"); // With FeedId

    // Check if files have been created
    expect(
      memfs.fs.readFileSync(`${FEED_META_DIR}test-1.json`, { encoding: "utf8" })
    ).toStrictEqual(stringifiedMeta);

    expect(
      memfs.fs.readFileSync(`${FEED_META_DIR}test-testId-1.json`, {
        encoding: "utf8",
      })
    ).toStrictEqual(stringifiedMeta);
  });
});

describe("initFeedMeta", () => {
  beforeEach(() => {
    memfs.vol.reset();
  });

  it("creates FEED_META_DIR if it doesn't exists", () => {
    expect.assertions(1);

    // Setup a filesystem with no metadata directory
    memfs.vol.fromJSON({ "public/": null });

    initFeedMeta();

    //  Check if metadata directory was created
    expect(memfs.fs.existsSync(FEED_META_DIR)).toBeTruthy();
  });

  it("recreates FEED_META_DIR if it does exist", () => {
    expect.assertions(1);

    // Create a filesystem with metadata directory containing random files
    memfs.vol.fromJSON({
      [`${FEED_META_DIR}random-file.json`]: "random-text",
    });

    initFeedMeta();

    // Check if the previous contents of the metadata directory have been cleared
    expect(memfs.fs.readdirSync(FEED_META_DIR)).toHaveLength(0);
  });
});

describe("getFeedRoute", () => {
  it("correctly calculates index feed route", () => {
    expect.assertions(1);

    const route = getFeedRoute(configFixture, "index");

    expect(route).toBe("/");
  });

  it("correctly calculates non-index feed routes", () => {
    expect.assertions(3);

    const tagRoute = getFeedRoute(configFixture, "tags", "test");

    expect(tagRoute).toBe("/tags/test");

    const categoryRoute = getFeedRoute(configFixture, "categories", "test");

    expect(categoryRoute).toBe("/categories/test");

    const categoryRouteWithoutId = getFeedRoute(configFixture, "categories");

    expect(categoryRouteWithoutId).toBe("/categories");
  });
});

describe("createPageMeta", () => {
  it("creates correct pages", () => {
    expect.assertions(24);

    // There are 5 posts per page
    // With total 16 posts in the fixture
    // Meaning a distribution of 5,5,5,1 posts in the pages

    const page1 = createPageMeta(0, 4, listingFixture);

    expect(page1.next).toBe(1);
    expect(page1.nextCount).toBe(5);
    expect(page1.prev).toBeUndefined();
    expect(page1.prevCount).toBeUndefined();
    expect(page1.posts).toHaveLength(5);
    expect(page1.posts).toMatchSnapshot();

    const page2 = createPageMeta(1, 4, listingFixture);

    expect(page2.next).toBe(2);
    expect(page2.nextCount).toBe(5);
    expect(page2.prev).toBe(0);
    expect(page2.prevCount).toBe(5);
    expect(page2.posts).toHaveLength(5);
    expect(page2.posts).toMatchSnapshot();

    const page3 = createPageMeta(2, 4, listingFixture);

    expect(page3.next).toBe(3);
    expect(page3.nextCount).toBe(1);
    expect(page3.prev).toBe(1);
    expect(page3.prevCount).toBe(5);
    expect(page3.posts).toHaveLength(5);
    expect(page3.posts).toMatchSnapshot();

    const page4 = createPageMeta(3, 4, listingFixture);

    expect(page4.next).toBeUndefined();
    expect(page4.nextCount).toBeUndefined();
    expect(page4.prev).toBe(2);
    expect(page4.prevCount).toBe(5);
    expect(page4.posts).toHaveLength(1);
    expect(page4.posts).toMatchSnapshot();
  });
});

describe("createFeed", () => {
  beforeEach(() => {
    memfs.vol.reset();
  });

  it("correctly generates a feed", async () => {
    expect.assertions(6);

    memfs.vol.fromJSON({
      [FEED_META_DIR]: null,
    });

    const MockedGatsbyActions = mocked(GatsbyActionsMock, true);

    await createFeed(configFixture, GatsbyActionsMock, listingFixture, "index");

    expect(
      memfs.fs.readFileSync(`${FEED_META_DIR}index-0.json`, {
        encoding: "utf8",
      })
    ).toMatchSnapshot();

    expect(
      memfs.fs.readFileSync(`${FEED_META_DIR}index-1.json`, {
        encoding: "utf8",
      })
    ).toMatchSnapshot();

    expect(
      memfs.fs.readFileSync(`${FEED_META_DIR}index-2.json`, {
        encoding: "utf8",
      })
    ).toMatchSnapshot();

    expect(
      memfs.fs.readFileSync(`${FEED_META_DIR}index-3.json`, {
        encoding: "utf8",
      })
    ).toMatchSnapshot();

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(MockedGatsbyActions.createPage).toHaveBeenCalledTimes(1);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(MockedGatsbyActions.createPage).toHaveBeenCalledWith(
      expect.objectContaining({
        path: "/",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        component: expect.any(String),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        context: expect.objectContaining({
          pageCount: 4,
          pageIndex: 0,
          feedType: "index",
          feedId: undefined,
        }),
      })
    );
  });
});
