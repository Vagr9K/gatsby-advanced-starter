import React from "react";
import { render } from "@testing-library/react";
import UserLinks from "./UserLinks";
import ConfigContext from "../context/ConfigContext";

const testConfig = {
  user: {
    links: [
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
    ],
  },
};

describe("component UserLinks", () => {
  it("renders links correctly", () => {
    expect.assertions(3); // 3 link checks
    const { getByRole } = render(
      <ConfigContext.Provider value={testConfig}>
        <UserLinks />
      </ConfigContext.Provider>
    );

    testConfig.user.links.forEach((userLink) => {
      const userLinkElement = getByRole("button", {
        name: userLink.label,
      }).closest("a");

      expect(userLinkElement).toHaveAttribute("href", userLink.url);
    });
  });

  it("returns nothing when no user.links are provided", () => {
    expect.assertions(1);
    const { container } = render(
      <ConfigContext.Provider value={{ user: { links: null } }}>
        <UserLinks />
      </ConfigContext.Provider>
    );

    expect(container).toBeEmptyDOMElement();
  });
});
