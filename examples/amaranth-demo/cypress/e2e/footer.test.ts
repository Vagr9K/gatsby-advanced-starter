const footerTestPages = ["/", "/big-sample-test"];

footerTestPages.forEach((url) => {
  describe(`Footer on page ${url}`, () => {
    beforeEach(() => {
      cy.visit(url);
      cy.waitForRouteChange();

      cy.get("footer").as("footer");
    });

    it("has user links", () => {
      cy.get("@footer").then((container) => {
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

    it("has a link to the RSS feed", () => {
      cy.get("@footer").then((container) => {
        cy.findByRole("link", { name: "RSS Feed", container })
          .closest("a")
          .should("have.attr", "href", "/rss.xml");
      });
    });

    it("has a 'Based on' notice", () => {
      cy.get("@footer").then((container) => {
        cy.findByText("Based on", { container })
          .children("a")
          .should(
            "have.attr",
            "href",
            "https://github.com/Vagr9K/gatsby-advanced-starter"
          );
      });

      it("has a copyright notice", () => {
        cy.get("@footer").then((container) => {
          cy.findByText("© Copyright 2021 | Ruben Harutyunyan", {
            container,
          });
        });
      });
    });
  });
});
