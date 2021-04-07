import React from "react";
import { render } from "@testing-library/react";
import cloneDeep from "clone-deep";
import SocialLinks, {
  generateRelatedTwitterNames,
  countFilter,
} from "./SocialLinks";
import ConfigContext from "../context/ConfigContext";
import config from "../config";

describe("component SocialLinks", () => {
  it("renders correctly", () => {
    expect.assertions(1);

    const { asFragment } = render(
      <ConfigContext.Provider value={config}>
        <SocialLinks
          postTitle="testTitle"
          postSlug="/test-post"
          postExcerpt="testExcerpt"
          mobile={false}
        />
      </ConfigContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly on mobile", () => {
    expect.assertions(1);

    const { asFragment } = render(
      <ConfigContext.Provider value={config}>
        <SocialLinks
          postTitle="testTitle"
          postSlug="/test-post"
          postExcerpt="testExcerpt"
          mobile
        />
      </ConfigContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("utility function generateRelatedTwitterNames", () => {
  it("correctly returns related Twitter name list", () => {
    expect.assertions(8);

    const fullConfig = cloneDeep(config);

    const fullList = generateRelatedTwitterNames(fullConfig);

    expect(fullList).toContain(fullConfig.website.twitterName);
    expect(fullList).toContain(fullConfig.user.twitterName);
    expect(fullList).toHaveLength(2);

    const onlyUsernameConfig = cloneDeep(fullConfig);
    onlyUsernameConfig.website.twitterName = undefined;

    const onlyUserName = generateRelatedTwitterNames(onlyUsernameConfig);
    expect(onlyUserName).toContain(onlyUsernameConfig.user.twitterName);
    expect(onlyUserName).toHaveLength(1);

    const onlySiteNameConfig = cloneDeep(fullConfig);
    onlySiteNameConfig.user.twitterName = undefined;

    const onlySiteName = generateRelatedTwitterNames(onlySiteNameConfig);
    expect(onlySiteName).toContain(onlySiteNameConfig.website.twitterName);
    expect(onlySiteName).toHaveLength(1);

    const emptyConfig = cloneDeep(fullConfig);
    emptyConfig.user.twitterName = undefined;
    emptyConfig.website.twitterName = undefined;

    const emptyList = generateRelatedTwitterNames(emptyConfig);
    expect(emptyList).toStrictEqual([]);
  });
});

describe("utility function countFilter", () => {
  it("returns correct count displays", () => {
    expect.assertions(2);

    expect(countFilter(0)).toBe("");
    expect(countFilter(10)).toBe("10");
  });
});
