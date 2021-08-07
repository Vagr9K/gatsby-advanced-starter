import getRelatedPosts from "../utils/getRelatedPosts";

import { Post, PostList } from "../../src/types";

const postListing = [
  {
    title: "BigTest",
    category: "tech",
    tags: ["programming", "test", "markdown", "big"],
    slug: "bigtest",
  },
  {
    title: "Test",
    category: "more",
    tags: ["huge"],
    slug: "test",
  },
  {
    title: "The Fairy's Witches",
    category: "something",
    tags: [],
    slug: "fairy",
  },
  {
    title: "The Butterfly of the Edge",
    category: "tech",
    tags: [
      "programming",
      "more tags",
      "testing",
      "another one",
      "stuff",
      "other",
    ],
    slug: "butterfly",
  },
  {
    title: "Random project 4 With Super Long Title Phase One",
    category: "random",
    tags: undefined,
    slug: "project-4",
  },
  {
    title: "Angels of Mist",
    category: "test3",
    tags: ["cheese", "other"],
    slug: "angels",
  },
  {
    title: "Birch in the Roses",
    category: "tech",
    tags: ["tag"],
    slug: "birch",
  },
  {
    title: "The Fallen Time",
    category: "another one",
    tags: ["test", "something", "tagging"],
    slug: "fallen",
  },
  {
    title: "Bold Mage",
    category: "tech",
    tags: ["programming", "stuff", "other"],
    slug: "bold",
  },
] as PostList;

const targetPost = postListing[0] as Post;

describe("getRelatedPosts", () => {
  it("correctly determines related posts", () => {
    expect.assertions(3);

    const relatedPosts = getRelatedPosts(targetPost, postListing);

    expect(relatedPosts).toHaveLength(2);
    expect(relatedPosts[0]?.title).toBe("The Butterfly of the Edge");
    expect(relatedPosts[1]?.title).toBe("Bold Mage");
  });

  it("correctly determines related posts when target is missing category", () => {
    expect.assertions(3);

    const relatedPosts = getRelatedPosts(
      { ...targetPost, category: undefined },
      postListing
    );

    expect(relatedPosts).toHaveLength(2);
    expect(relatedPosts[0]?.title).toBe("The Butterfly of the Edge");
    expect(relatedPosts[1]?.title).toBe("The Fallen Time");
  });

  it("correctly determines related posts when target is missing tags", () => {
    expect.assertions(3);

    const relatedPosts = getRelatedPosts(
      { ...targetPost, tags: undefined },
      postListing
    );

    expect(relatedPosts).toHaveLength(2);
    expect(relatedPosts[0]?.title).toBe("The Butterfly of the Edge");
    expect(relatedPosts[1]?.title).toBe("Birch in the Roses");
  });

  it("returns latest posts when target is missing tags and the category", () => {
    expect.assertions(3);

    const relatedPosts = getRelatedPosts(
      { ...targetPost, tags: undefined, category: undefined },
      postListing
    );

    expect(relatedPosts).toHaveLength(2);
    expect(relatedPosts[0]?.title).toBe("Test");
    expect(relatedPosts[1]?.title).toBe("The Fairy's Witches");
  });

  it("returns 2 posts even when there is only one direct category match", () => {
    expect.assertions(3);

    const relatedPosts = getRelatedPosts(
      { ...targetPost, category: "more" }, // The category "more" limits the matches to a single post
      postListing
    );

    expect(relatedPosts).toHaveLength(2);
    expect(relatedPosts[0]?.title).toBe("Test");
    expect(relatedPosts[1]?.title).toBe("The Butterfly of the Edge");
  });

  it("returns 2 posts even when there are no category matches", () => {
    expect.assertions(3);

    const relatedPosts = getRelatedPosts(
      { ...targetPost, category: "non-existent-category" }, // No other posts in this category
      postListing
    );

    expect(relatedPosts).toHaveLength(2);
    expect(relatedPosts[0]?.title).toBe("The Butterfly of the Edge");
    expect(relatedPosts[1]?.title).toBe("The Fallen Time");
  });

  it("works with no other posts besides the target post", () => {
    expect.assertions(1);

    const relatedPosts = getRelatedPosts(
      { ...targetPost, category: "non-existent-category" },
      postListing.slice(0, 1) // Only target post itself is in the list
    );

    expect(relatedPosts).toHaveLength(0);
  });

  it("works with low amount of posts", () => {
    expect.assertions(2);

    // Set the category to test the edge case of no posts showing up in the secondary tag ranking
    const relatedPosts = getRelatedPosts(
      { ...targetPost, category: "more" },
      postListing.slice(0, 2) // ne more post besides the target post is in the list
    );

    expect(relatedPosts).toHaveLength(1);
    expect(relatedPosts[0]?.title).toBe("Test");
  });
});
