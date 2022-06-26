// The "Big Test" post contains all MDX features that we support
// and is used as a test ground

describe(`MDX rendering test`, () => {
  before(() => {
    cy.visit("/big-sample-test");
    cy.waitForRouteChange();
  });

  beforeEach(() => {
    cy.get("article").as("article");
  });

  it("renders the heading elements", () => {
    cy.get("@article").find("h1").contains(/^H1$/);
    cy.get("@article").find("h2").contains(/^H2$/);
    cy.get("@article").find("h3").contains(/^H3$/);
    cy.get("@article").find("h4").contains(/^H4$/);
    cy.get("@article").find("h5").contains(/^H5$/);
    cy.get("@article").find("h6").contains(/^H6$/);
  });

  it("renders the emphasis elements", () => {
    cy.get("@article")
      .find("em")
      .contains(/^asterisks$/);
    cy.get("@article")
      .find("em")
      .contains(/^underscores$/);

    cy.get("@article")
      .find("strong")
      .contains(/^asterisks$/);
    cy.get("@article")
      .find("strong")
      .contains(/^underscores$/);

    cy.get("@article")
      .find("strong")
      .contains("asterisks and ")
      .find("em")
      .contains(/^underscores$/);

    cy.get("@article")
      .find("del")
      .contains(/^Scratch this\.$/);
  });

  it("renders the list elements", () => {
    cy.get("@article")
      .find("ol > li > p")
      .contains(/^First ordered list item$/);

    cy.get("@article")
      .find("ol > li > ul > li")
      .contains(/^Unordered sub-list\.$/);

    cy.get("@article")
      .find("ol > li > ol > li")
      .contains(/^Ordered sub-list$/);

    cy.get("@article")
      .find("ol > li:last-child() > p")
      .should("have.length", 2);

    cy.get("@article")
      .find("ul > li")
      .contains(/^Unordered list can use asterisks$/);

    cy.get("@article")
      .find("ul > li")
      .contains(/^Or minuses$/);

    cy.get("@article")
      .find("ul > li")
      .contains(/^Or pluses$/);
  });

  it("renders links", () => {
    cy.get("@article")
      .find('a[href="https://www.google.com"]')
      .contains(/^I'm an inline-style link$/);

    cy.get("@article")
      .find('a[href="http://www.example.com"]')
      .contains(/^http:\/\/www\.example\.com$/);
  });

  it("renders images", () => {
    cy.get("@article")
      .findByAltText("local picture")
      .should("have.attr", "class", "gatsby-resp-image-image");

    cy.get("@article")
      .findByAltText("big picture that applies to water or nature")
      .should(
        "have.attr",
        "src",
        "https://source.unsplash.com/1600x900/?nature,water"
      );
  });

  it("renders code blocks", () => {
    cy.get("@article")
      .find('p > code[class="language-text"]')
      .contains(/back-ticks around/);

    cy.get("@article")
      .find(
        'pre[class="language-javascript"] > code[class="language-javascript"]'
      )
      .contains("JavaScript syntax highlighting");

    cy.get("@article")
      .find('pre[class="language-python"] > code[class="language-python"]')
      .contains("Python syntax highlighting");

    cy.get("@article")
      .find(
        'pre[class="language-no-highlight"] > code[class="language-no-highlight"]'
      )
      .contains("No language indicated, so no syntax highlighting");
  });

  it("renders tables", () => {
    cy.get("@article")
      .find("table  > thead > tr > th")
      .contains(/^Tables$/);

    cy.get("@article")
      .find('table  > thead > tr > th[align="center"]')
      .contains(/^Are$/);

    cy.get("@article")
      .find('table  > thead > tr > th[align="right"]')
      .contains(/^Cool$/);

    cy.get("@article")
      .find("table  > tbody > tr > td")
      .contains(/^col 3 is$/);

    cy.get("@article")
      .find('table  > tbody > tr > td[align="center"]')
      .contains(/^right-aligned$/);

    cy.get("@article")
      .find('table  > tbody > tr > td[align="right"]')
      .contains(/^\$1600$/);

    cy.get("@article")
      .find("table > tbody > tr > td > em")
      .contains(/^Still$/);

    cy.get("@article")
      .find('table > tbody > tr > td > code[class="language-text"]')
      .contains(/^renders$/);

    cy.get("@article")
      .find("table > tbody > tr > td > strong")
      .contains(/^nicely$/);
  });

  it("renders blockquotes", () => {
    cy.get("@article")
      .find("blockquote  > p")
      .contains(/^Blockquotes are very handy/);

    cy.get("@article")
      .find("blockquote  > p")
      .contains(
        /^This is a very long line that will still be quoted properly when it wraps./
      )
      .find("strong")
      .contains(/^Markdown$/);
  });

  it("renders inline HTML", () => {
    cy.get("@article")
      .find("dl  > dt")
      .contains(/^Definition list$/);

    cy.get("@article")
      .find("dl  > dd")
      .contains(/^Is something people use sometimes\.$/);
  });

  it("renders horizontal rules", () => {
    cy.get("@article")
      .find("hr  + p")
      .contains(/^Hyphens$/);
    cy.get("@article")
      .find("hr  + p")
      .contains(/^Asterisks$/);
    cy.get("@article")
      .find("hr  + p")
      .contains(/^Underscores$/);
  });

  it("renders videos", () => {
    cy.get("@article").find(
      'p > div.gatsby-resp-iframe-wrapper > div.embedVideo-container > iframe[src="https://www.youtube.com/embed/vRwp--RoJdo?rel=0"]'
    );
  });
});
