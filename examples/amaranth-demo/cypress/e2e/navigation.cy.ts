describe(`main navigation`, () => {
  beforeEach(() => {
    cy.visit("/big-sample-test");
    cy.waitForRouteChange();
  });

  it("has a clickable logo", () => {
    cy.get("header").findAllByText("Advanced Blog").click();

    cy.location("pathname").should("eq", "/");
  });

  it("has a Posts link", () => {
    cy.get("header").findAllByText("Posts").click();

    cy.location("pathname").should("eq", "/");
  });

  it("has an About link", () => {
    cy.get("header").findAllByText("About").click();

    cy.url().should("include", "/about");
  });
});
