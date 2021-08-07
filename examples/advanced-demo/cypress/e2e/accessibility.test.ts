import { Rule } from "axe-core";

const accTestUrls = ["/", "/big-sample-test"];

// Test for accessibility issue with axe-core
describe("Accessibility tests", () => {
  accTestUrls.forEach((url) => {
    it(`Page ${url} has no detectable accessibility violations on load`, () => {
      cy.visit(url);
      cy.waitForRouteChange();
      cy.injectAxe();

      const axeRules: Rule[] = [
        {
          id: "frame-title-unique",
          selector: "frame[title], iframe[title]:not([title='Disqus'])",
          enabled: true,
        },
      ];

      // The dev server causes certain issues with accessibility
      // Ignore those false positives
      const devRules = [
        { id: "duplicate-id", enabled: false },
        { id: "landmark-no-duplicate-contentinfo", enabled: false },
        { id: "landmark-unique", enabled: false },
      ];

      if (Cypress.env("STAGE") === "dev") axeRules.push(...devRules);

      cy.configureAxe({
        rules: axeRules,
      });

      cy.checkA11y();
    });
  });
});
