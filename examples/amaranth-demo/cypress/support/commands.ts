// Based on https://github.com/cypress-io/cypress/issues/877#issuecomment-490504922

Cypress.Commands.add("isInViewport", (element: string) => {
  cy.get(element).then(($el) => {
    cy.window().then((window) => {
      const bottom = Cypress.$(window).height();

      const rect = $el[0].getBoundingClientRect();

      expect(rect.top).not.to.be.greaterThan(bottom);
      expect(rect.bottom).not.to.be.greaterThan(bottom);
    });
  });
});
