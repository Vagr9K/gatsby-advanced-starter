import { ResponseData } from "../types";

// The dev server doesn't generate an RSS feed, making the test pointless
if (Cypress.env("STAGE") !== "dev")
  describe("RSS feed", () => {
    it("contains valid post links", () => {
      cy.request("/rss.xml").as("rssFeed");

      cy.get("@rssFeed").then((response) => {
        const respData = response as unknown as ResponseData;

        cy.task("parseRss", respData.body).then((rssPostLinks) => {
          // Make sure the test post URL is in the list
          expect(rssPostLinks).to.include("/big-sample-test");

          const linkList = rssPostLinks as string[];

          // Verify that the URLs are valid
          linkList.forEach((link) => {
            cy.visit(link);
          });
        });
      });
    });
  });
