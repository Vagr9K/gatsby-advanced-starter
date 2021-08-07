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
    cy.findByText("Time to read: 3 minutes");

    cy.findByText("Category:").siblings('a[href="/category/tech"]');

    cy.findByText("Tags:").siblings('a[href="/tag/programming"]');
    cy.findByText("Tags:").siblings('a[href="/tag/test"]');
    cy.findByText("Tags:").siblings('a[href="/tag/markdown"]');
    cy.findByText("Tags:").siblings('a[href="/tag/big"]');
  });

  it("renders the article", () => {
    cy.get("article > p").contains(
      /NOTE: This "post" is based on Markdown Cheatsheet and is meant to test styling of Markdown generated documents\./
    );
  });

  it("renders social links", () => {
    cy.get(".social-links");
  });

  it("renders Disqus", () => {
    cy.get("#disqus_recommendations");
    cy.get("#disqus_thread");
  });

  it("renders related Posts", () => {
    cy.findByText("Related posts:")
      .siblings()
      .find('a[href="/storms-of-doors"]');
    cy.findByText("Related posts:")
      .siblings()
      .find('a[href="/the-darkest-something"]');
  });
});
