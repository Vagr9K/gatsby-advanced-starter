import { ResponseData } from "../types";

// The dev server doesn't generate an RSS feed, making the test pointless
if (Cypress.env("STAGE") !== "dev")
  describe("SiteMap", () => {
    it("contains valid urls", () => {
      cy.request("/sitemap/sitemap-0.xml").then((response) => {
        const respData = response as unknown as ResponseData;

        cy.task("parseSitemap", {
          siteUrl: "https://gatsby-advanced-starter-demo.netlify.com",
          sitemapString: respData.body,
        }).then((siteMapLinks) => {
          const linkList = siteMapLinks as string[];

          // Make sure the test post URL is in the list
          expect(linkList).to.include("/big-sample-test");

          // Verify that the URLs are valid
          linkList.forEach((link) => {
            cy.visit(link);
          });
        });
      });
    });
  });
