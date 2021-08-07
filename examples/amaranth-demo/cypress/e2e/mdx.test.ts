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
    cy.get("@article")
      .find(`h1[id="h-1"]`)
      .find('a[href="/big-sample-test#h-1"]')
      .contains("H1");

    cy.get("@article")
      .find(`h2[id="h-2"]`)
      .find('a[href="/big-sample-test#h-2"]')
      .contains("H2");

    cy.get("@article")
      .find(`h3[id="h-3"]`)
      .find('a[href="/big-sample-test#h-3"]')
      .contains("H3");

    cy.get("@article")
      .find(`h4[id="h-4"]`)
      .find('a[href="/big-sample-test#h-4"]')
      .contains("H4");

    cy.get("@article")
      .find(`h5[id="h-5"]`)
      .find('a[href="/big-sample-test#h-5"]')
      .contains("H5");

    cy.get("@article")
      .find(`h6[id="h-6"]`)
      .find('a[href="/big-sample-test#h-6"]')
      .contains("H6");
  });

  it("has functioning table of contents", () => {
    const testHeaderAnchor = (headerName: string, headerId: string) => {
      cy.get(`p > a[href="#${headerId}"]`).contains(headerName).click();

      cy.isInViewport(`#${headerId}`);
    };

    testHeaderAnchor("Headers", "headers");
    testHeaderAnchor("Emphasis", "emphasis");
    testHeaderAnchor("Lists", "lists");
    testHeaderAnchor("Links", "links");
    testHeaderAnchor("Images", "images");
    testHeaderAnchor(
      "Code and Syntax Highlighting",
      "code-and-syntax-highlighting"
    );
    testHeaderAnchor("Blockquotes", "blockquotes");
    testHeaderAnchor("Inline HTML", "inline-html");
    testHeaderAnchor("Horizontal Rule", "horizontal-rule");
    testHeaderAnchor("Line Breaks", "line-breaks");
    testHeaderAnchor("YouTube Videos", "you-tube-videos");
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
      .find("div > ol > li > p")
      .contains(/^First ordered list item$/);

    cy.get("@article")
      .find("div > ol > li > div > ul > li")
      .contains(/^Unordered sub-list\.$/);

    cy.get("@article")
      .find("div > ol > li > div > ol > li")
      .contains(/^Ordered sub-list$/);

    cy.get("@article")
      .find("div > ol > li:last-child() > p")
      .should("have.length", 2);

    cy.get("@article")
      .find("div > ul > li")
      .contains(/^Unordered list can use asterisks$/);

    cy.get("@article")
      .find("div > ul > li")
      .contains(/^Or minuses$/);

    cy.get("@article")
      .find("div > ul > li")
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
      .should("have.class", "gatsby-resp-image-image");

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
      .find('p > code[class*="language-text"]')
      .contains(/back-ticks around/);

    cy.get("@article")
      .find(
        'pre[class*="language-javascript"] > code[class*="language-javascript"]'
      )
      .contains("JavaScript syntax highlighting");

    cy.get("@article")
      .find('pre[class*="language-python"] > code[class*="language-python"]')
      .contains("Python syntax highlighting");

    cy.get("@article")
      .find(
        'pre[class*="language-no-highlight"] > code[class*="language-no-highlight"]'
      )
      .contains("No language indicated, so no syntax highlighting");
  });

  it("renders tables", () => {
    cy.get("@article")
      .find("div > table  > thead > tr > th")
      .contains(/^Tables$/);

    cy.get("@article")
      .find("div > table  > thead > tr > th")
      .contains(/^Are$/)
      .should("have.css", "text-align", "center");

    cy.get("@article")
      .find("div > table  > thead > tr > th")
      .contains(/^Cool$/)
      .should("have.css", "text-align", "right");

    cy.get("@article")
      .find("div > table  > tbody > tr > td")
      .contains(/^col 3 is$/);

    cy.get("@article")
      .find("div > table  > tbody > tr > td")
      .contains(/^right-aligned$/)
      .should("have.css", "text-align", "center");

    cy.get("@article")
      .find("div > table  > tbody > tr > td")
      .contains(/^\$1600$/)
      .should("have.css", "text-align", "right");

    cy.get("@article")
      .find("div > table > tbody > tr > td > em")
      .contains(/^Still$/);

    cy.get("@article")
      .find('div > table > tbody > tr > td > code[class*="language-text"]')
      .contains(/^renders$/);

    cy.get("@article")
      .find("div > table > tbody > tr > td > strong")
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
    cy.get("div > hr")
      .parent()
      .next()
      .contains(/^Hyphens$/);

    cy.get("div > hr")
      .parent()
      .next()
      .contains(/^Asterisks$/);

    cy.get("div > hr")
      .parent()
      .next()
      .contains(/^Underscores$/);
  });

  it("renders videos", () => {
    cy.get("@article").find(
      'p > div.gatsby-resp-iframe-wrapper > div.embedVideo-container > iframe[src="https://www.youtube.com/embed/vRwp--RoJdo?rel=0"]'
    );
  });
});
