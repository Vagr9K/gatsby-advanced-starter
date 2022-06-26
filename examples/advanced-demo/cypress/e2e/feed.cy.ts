const PAGE_POST_COUNT = 5;

const feedUrls = ["/", "/category/tech", "/tag/programming"];

feedUrls.forEach((url) => {
  describe(`Feed page ${url}`, () => {
    beforeEach(() => {
      cy.visit(url);
      cy.waitForRouteChange();
    });

    it("loads the initial posts properly", () => {
      cy.get(".listing-wrapper")
        .children("a")
        .should("have.length", PAGE_POST_COUNT);

      // Make sure the first page posts get loaded properly
      cy.findByText("Big Test");
      cy.findByText("Storms of Doors");
      cy.findByText("Valley in the Storms");
      cy.findByText("The Darkest Something");
      cy.findByText("Flames in the Time");
    });

    it("correctly navigates to the Big Test post via title", () => {
      cy.findByText("Big Test").click();
      cy.waitForRouteChange();

      cy.url().should("contain", "/big-sample-test");
    });

    it("correctly navigates to the Big Test post via cover image", () => {
      cy.findByAltText(
        "An image tagged as nature and water for the big test."
      ).click();
      cy.waitForRouteChange();

      cy.url().should("contain", "/big-sample-test");
    });

    it("contains post excerpt", () => {
      cy.findByText(
        'NOTE: This "post" is based on Markdown Cheatsheet and is meant to test styling of Markdown generated documents. This is intended as a…'
      );
    });

    it("has functioning infinite scrolling", () => {
      cy.get(".listing-wrapper")
        .children("a")
        .should("have.length", PAGE_POST_COUNT);

      // Scroll to bottom and check the amount of loaded posts
      cy.scrollTo("bottom");

      cy.get(".listing-wrapper")
        .children("a")
        .should("have.length", PAGE_POST_COUNT * 2);
    });

    it("keeps fetched infinite scroll pages in cache for faster access between page navigation", () => {
      cy.on("uncaught:exception", () => false);

      // Load a single scroll page
      cy.scrollTo("bottom");
      cy.get(".listing-wrapper")
        .children("a")
        .should("have.length", PAGE_POST_COUNT * 2);

      // Make sure navigating between pages doesn't clear the cache
      cy.findByText("Big Test").click();
      cy.waitForRouteChange();

      cy.go("back");
      cy.waitForRouteChange();

      cy.get(".listing-wrapper")
        .children("a")
        .should("have.length", PAGE_POST_COUNT * 2);
    });
  });
});
