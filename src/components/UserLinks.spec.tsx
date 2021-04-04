import React from "react";
import { render } from "@testing-library/react";
import UserLinks from "./UserLinks";
import ConfigContext from "../context/ConfigContext";
import config, { SiteConfig, UserData } from "../../config";

const testLinks = [
  {
    label: "GitHub",
    url: "https://github.com/Vagr9K/gatsby-advanced-starter",
    iconClassName: "fa fa-github",
  },
  {
    label: "Twitter",
    url: "https://twitter.com/Vagr9K",
    iconClassName: "fa fa-twitter",
  },
  {
    label: "Email",
    url: "mailto:vagr9k@gmail.com",
    iconClassName: "fa fa-envelope",
  },
];

const testUser: UserData = { ...config.user, links: testLinks };
const testConfig: SiteConfig = { ...config, user: testUser };

describe("component UserLinks", () => {
  it("renders links correctly", () => {
    expect.assertions(3); // 3 link checks
    const { getByRole } = render(
      <ConfigContext.Provider value={testConfig}>
        <UserLinks />
      </ConfigContext.Provider>
    );

    testLinks.forEach((userLink) => {
      const userLinkElement = getByRole("button", {
        name: userLink.label,
      }).closest("a");

      expect(userLinkElement).toHaveAttribute("href", userLink.url);
    });
  });

  it("returns nothing when no user.links are provided", () => {
    expect.assertions(1);

    const emptyLinksConfig = { ...testConfig };
    emptyLinksConfig.user.links = undefined;

    const { container } = render(
      <ConfigContext.Provider value={emptyLinksConfig}>
        <UserLinks />
      </ConfigContext.Provider>
    );

    expect(container).toBeEmptyDOMElement();
  });
});
