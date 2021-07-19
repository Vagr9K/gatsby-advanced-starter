describe(`Post page`, () => {
  before(() => {
    cy.visit("/big-sample-test");
    cy.waitForRouteChange();
  });

  beforeEach(() => {});

  it("renders the post intro", () => {
    cy.findByText("Big Test", { selector: "h1" });

    cy.findByText(
      'NOTE: This "post" is based on Markdown Cheatsheet and is meant to test styling of Markdown generated documents. This is intended as a…'
    );

    cy.findByAltText("An image tagged as nature and water for the big test.");
    cy.findByText("An image tagged as nature and water for the big test.", {
      selector: "figcaption",
    });
  });

  it("renders the post info", () => {
    cy.get("p").contains("⋅ Aug 1, 2021 ⋅ 3 min read");

    cy.get("main").then((container) => {
      cy.findByRole("link", { name: "tech", container }).should(
        "have.attr",
        "href",
        "/category/tech"
      );

      cy.findByRole("link", { name: "programming", container }).should(
        "have.attr",
        "href",
        "/tag/programming"
      );

      cy.findByRole("link", { name: "test", container }).should(
        "have.attr",
        "href",
        "/tag/test"
      );
    });
  });

  it("renders the article", () => {
    cy.get("article > p").contains(
      /NOTE: This "post" is based on Markdown Cheatsheet and is meant to test styling of Markdown generated documents\./
    );
  });

  it("renders social links", () => {
    cy.findByRole("region", { name: "Share on social media" }).as(
      "shareSection"
    );

    cy.get("@shareSection").findByText("SHARE");

    // Make sure social media share buttons are rendered
    cy.get("@shareSection").get('button[aria-label="facebook"]');
    cy.get("@shareSection").get('button[aria-label="twitter"]');
    cy.get("@shareSection").get('button[aria-label="reddit"]');
    cy.get("@shareSection").get('button[aria-label="linkedin"]');
  });

  it("renders author segment", () => {
    // Get the author segment
    cy.get('aside[aria-label="About the author"]').then((container) => {
      // Make sure it contains information about the author
      cy.findByText("A full-stack web developer looking for a challenge!", {
        container,
      });

      cy.findByText("Advanced User", {
        container,
      });

      // Make sure it contains author's profile links
      cy.findByRole("link", { name: "Twitter Profile", container })
        .closest("a")
        .should("have.attr", "href", "https://twitter.com/Vagr9K");

      cy.findByRole("link", { name: "GitHub Profile", container })
        .closest("a")
        .should("have.attr", "href", "https://github.com/vagr9k");

      cy.findByRole("link", { name: "LinkedIn Profile", container })
        .closest("a")
        .should(
          "have.attr",
          "href",
          "https://www.linkedin.com/in/your-linkedin"
        );

      cy.findByRole("link", { name: "E-Mail", container })
        .closest("a")
        .should("have.attr", "href", "mailto:AdvancedUser@example.com");
    });
  });

  it("renders related Posts", () => {
    cy.findByText("RELATED POSTS")
      .next()
      .children()
      .first()
      .children()
      .find('a[href="/storms-of-doors"]')
      .contains(/^Storms of Doors$/);

    cy.findByText("RELATED POSTS")
      .next()
      .children()
      .first()
      .children()
      .find('a[href="/the-darkest-something"]')
      .contains(/^The Darkest Something$/);
  });
});
