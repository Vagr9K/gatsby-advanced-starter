const allMarkdownRemark = {
  edges: [
    {
      node: {
        fields: {
          slug: "/big-sample-test",
          date: "2018-02-28T20:00:00.000Z",
        },
        excerpt:
          'NOTE: This "post" is based on Markdown Cheatsheet and is meant to test styling of Markdown generated documents. This is intended as a quick…',
        timeToRead: 8,
        frontmatter: {
          title: "Big Test",
          tags: ["test", "huge"],
          cover: "5.jpg",
          date: "2018-03-01",
        },
      },
    },
    {
      node: {
        fields: {
          slug: "/the-fairys-witches",
          date: "2017-04-01T20:00:00.000Z",
        },
        excerpt:
          "Eram mora tuas in inter ferens caterva Ait oculos Lorem markdownum. Dedit caput, saxa lenis adhibere negarunt substiterat et ab\ntestes…",
        timeToRead: 1,
        frontmatter: {
          title: "The Fairy's Witches",
          tags: null,
          cover: "3.jpg",
          date: "2017-04-02",
        },
      },
    },
    {
      node: {
        fields: {
          slug: "/the-butterfly-of-the-edge",
          date: "2017-03-16T20:00:00.000Z",
        },
        excerpt:
          "Hanc indeploratum seram Amphitryoniadae tremulis pauperque manum Cognoscenti audeat ulterius sublimia terga potiorque saxo Lorem markdownum…",
        timeToRead: 1,
        frontmatter: {
          title: "The Butterfly of the Edge",
          tags: [
            "programming",
            "more tags",
            "testing",
            "another one",
            "stuff",
            "other",
          ],
          cover: "2.jpg",
          date: "2017-03-17",
        },
      },
    },
    {
      node: {
        fields: {
          slug: "/random-project-4-with-super-long-title-phase-one",
          date: "2017-03-01T20:00:00.000Z",
        },
        excerpt:
          "Artificem honorati ore temperat Lycus quam antiquum Mendaci pinu ipsi nunc Lorem markdownum supplex. Care ferre nos praemia detestatur…",
        timeToRead: 2,
        frontmatter: {
          title: "Random project 4 With Super Long Title Phase One",
          tags: ["say hi"],
          cover: "4.jpg",
          date: "2017-03-02",
        },
      },
    },
    {
      node: {
        fields: {
          slug: "/angels-of-mist",
          date: "2017-02-28T20:00:00.000Z",
        },
        excerpt:
          "Ab dicemur cura Mane oscula anxia Lorem markdownum alius, non voluntas supremaque: canes ager cingere quis;\nrerum? Nunc nec ferunt verbis…",
        timeToRead: 2,
        frontmatter: {
          title: "Angels of Mist",
          tags: ["cheese", "other"],
          cover: "6.jpg",
          date: "2017-03-01",
        },
      },
    },
    {
      node: {
        fields: {
          slug: "/birch-in-the-roses",
          date: "2017-02-28T20:00:00.000Z",
        },
        excerpt:
          "Domos primus caelum taedia Accipit alto fecerat mutato centauri haerent dominoque Lorem markdownum nunc fuerat vulgaris ipse. Profecisse…",
        timeToRead: 1,
        frontmatter: {
          title: "Birch in the Roses",
          tags: ["tag"],
          cover: "1.jpg",
          date: "2017-03-01",
        },
      },
    },
    {
      node: {
        fields: {
          slug: "/the-fallen-time",
          date: "2017-01-31T20:00:00.000Z",
        },
        excerpt:
          "Autolyci eminus retenta Hoc domum solitos veteremque nostrum Lorem markdownum huc suo ara, dubites celeri mihi bicolor. Secuti non? Suo opus…",
        timeToRead: 2,
        frontmatter: {
          title: "The Fallen Time",
          tags: ["test", "something", "tagging"],
          cover: "7.jpg",
          date: "2017-02-01",
        },
      },
    },
    {
      node: {
        fields: {
          slug: "/bold-mage",
          date: "2016-12-31T20:00:00.000Z",
        },
        excerpt:
          "Quanto et ius coniunctis urbes Sedisti civiliter Lorem markdownum Ixione palus semper peritura barbaque in aureus\nobliquum erigitur gemmae…",
        timeToRead: 2,
        frontmatter: {
          title: "Bold Mage",
          tags: ["programming", "stuff", "other"],
          cover: "8.jpg",
          date: "2017-01-01",
        },
      },
    },
  ],
};

const markdownRemark = {
  html:
    '<h1 id="note-this-post-is-based-on-markdown-cheatsheet-and-is-meant-to-test-styling-of-markdown-generated-documents" style="position:relative;"><a href="#note-this-post-is-based-on-markdown-cheatsheet-and-is-meant-to-test-styling-of-markdown-generated-documents" aria-label="note this post is based on markdown cheatsheet and is meant to test styling of markdown generated documents permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>NOTE: This "post" is based on <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">Markdown Cheatsheet</a> and is meant to test styling of Markdown generated documents.</h1>\n<p>This is intended as a quick reference and showcase. For more complete info, see <a href="http://daringfireball.net/projects/markdown/">John Gruber\'s original spec</a> and the <a href="http://github.github.com/github-flavored-markdown/">Github-flavored Markdown info page</a>.</p>\n<p>This cheatsheet is specifically <em>Markdown Here\'s</em> version of Github-flavored Markdown. This differs slightly in styling and syntax from what Github uses, so what you see below might vary a little from what you get in a <em>Markdown Here</em> email, but it should be pretty close.</p>\n<p>You can play around with Markdown on our <a href="http://www.markdown-here.com/livedemo.html">live demo page</a>.</p>\n<p>(If you\'re not a Markdown Here user, check out the <a href="./Markdown-Cheatsheet">Markdown Cheatsheet</a> that is not specific to MDH. But, really, you should also use Markdown Here, because it\'s awesome. <a href="http://markdown-here.com">http://markdown-here.com</a>)</p>\n<h5 id="table-of-contents" style="position:relative;"><a href="#table-of-contents" aria-label="table of contents permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Table of Contents</h5>\n<p><a href="#headers">Headers</a>\n<a href="#emphasis">Emphasis</a>\n<a href="#lists">Lists</a>\n<a href="#links">Links</a>\n<a href="#images">Images</a>\n<a href="#code">Code and Syntax Highlighting</a>\n<a href="#tables">Tables</a>\n<a href="#blockquotes">Blockquotes</a>\n<a href="#html">Inline HTML</a>\n<a href="#hr">Horizontal Rule</a>\n<a href="#lines">Line Breaks</a>\n<a href="#videos">YouTube Videos</a></p>\n<a name="headers"/>\n<h2 id="headers" style="position:relative;"><a href="#headers" aria-label="headers permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Headers</h2>\n<div class="gatsby-highlight" data-language="no-highlight"><pre class="language-no-highlight"><code class="language-no-highlight"># H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\n\nAlternatively, for H1 and H2, an underline-ish style:\n\nAlt-H1\n======\n\nAlt-H2\n------</code></pre></div>\n<h1 id="h1" style="position:relative;"><a href="#h1" aria-label="h1 permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>H1</h1>\n<h2 id="h2" style="position:relative;"><a href="#h2" aria-label="h2 permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>H2</h2>\n<h3 id="h3" style="position:relative;"><a href="#h3" aria-label="h3 permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>H3</h3>\n<h4 id="h4" style="position:relative;"><a href="#h4" aria-label="h4 permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>H4</h4>\n<h5 id="h5" style="position:relative;"><a href="#h5" aria-label="h5 permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>H5</h5>\n<h6 id="h6" style="position:relative;"><a href="#h6" aria-label="h6 permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>H6</h6>\n<p>Alternatively, for H1 and H2, an underline-ish style:</p>\n<h1 id="alt-h1" style="position:relative;"><a href="#alt-h1" aria-label="alt h1 permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Alt-H1</h1>\n<h2 id="alt-h2" style="position:relative;"><a href="#alt-h2" aria-label="alt h2 permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Alt-H2</h2>\n<a name="emphasis"/>\n<h2 id="emphasis" style="position:relative;"><a href="#emphasis" aria-label="emphasis permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Emphasis</h2>\n<div class="gatsby-highlight" data-language="no-highlight"><pre class="language-no-highlight"><code class="language-no-highlight">Emphasis, aka italics, with *asterisks* or _underscores_.\n\nStrong emphasis, aka bold, with **asterisks** or __underscores__.\n\nCombined emphasis with **asterisks and _underscores_**.\n\nStrikethrough uses two tildes. ~~Scratch this.~~</code></pre></div>\n<p>Emphasis, aka italics, with <em>asterisks</em> or <em>underscores</em>.</p>\n<p>Strong emphasis, aka bold, with <strong>asterisks</strong> or <strong>underscores</strong>.</p>\n<p>Combined emphasis with <strong>asterisks and <em>underscores</em></strong>.</p>\n<p>Strikethrough uses two tildes. <del>Scratch this.</del></p>\n<a name="lists"/>\n<h2 id="lists" style="position:relative;"><a href="#lists" aria-label="lists permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lists</h2>\n<div class="gatsby-highlight" data-language="no-highlight"><pre class="language-no-highlight"><code class="language-no-highlight">1. First ordered list item\n2. Another item\n  * Unordered sub-list.\n1. Actual numbers don&#39;t matter, just that it&#39;s a number\n  1. Ordered sub-list\n4. And another item.\n\n   Some text that should be aligned with the above item.\n\n* Unordered list can use asterisks\n- Or minuses\n+ Or pluses</code></pre></div>\n<ol>\n<li>First ordered list item</li>\n<li>\n<p>Another item</p>\n<ul>\n<li>Unordered sub-list.</li>\n</ul>\n</li>\n<li>\n<p>Actual numbers don\'t matter, just that it\'s a number</p>\n<ol>\n<li>Ordered sub-list</li>\n</ol>\n</li>\n<li>\n<p>And another item.</p>\n<p>Some text that should be aligned with the above item.</p>\n</li>\n<li>Unordered list can use asterisks</li>\n<li>Or minuses</li>\n<li>Or pluses</li>\n</ol>\n<a name="links"/>\n<h2 id="links" style="position:relative;"><a href="#links" aria-label="links permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Links</h2>\n<p>There are two ways to create links.</p>\n<div class="gatsby-highlight" data-language="no-highlight"><pre class="language-no-highlight"><code class="language-no-highlight">[I&#39;m an inline-style link](https://www.google.com)\n\n[I&#39;m a reference-style link][Arbitrary case-insensitive reference text]\n\n[You can use numbers for reference-style link definitions][1]\n\nOr leave it empty and use the [link text itself]\n\nURLs and URLs in angle brackets will automatically get turned into links.\nhttp://www.example.com or &lt;http://www.example.com&gt; and sometimes\nexample.com (but not on Github, for example).\n\nSome text to show that the reference links can follow later.\n\n[arbitrary case-insensitive reference text]: https://www.mozilla.org\n[1]: http://slashdot.org\n[link text itself]: http://www.reddit.com</code></pre></div>\n<p><a href="https://www.google.com">I\'m an inline-style link</a></p>\n<p><a href="https://www.mozilla.org">I\'m a reference-style link</a></p>\n<p><a href="http://slashdot.org">You can use numbers for reference-style link definitions</a></p>\n<p>Or leave it empty and use the <a href="http://www.reddit.com">link text itself</a></p>\n<p>URLs and URLs in angle brackets will automatically get turned into links.\n<a href="http://www.example.com">http://www.example.com</a> or <a href="http://www.example.com">http://www.example.com</a> and sometimes\nexample.com (but not on Github, for example).</p>\n<p>Some text to show that the reference links can follow later.</p>\n<a name="images"/>\n<h2 id="images" style="position:relative;"><a href="#images" aria-label="images permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Images</h2>\n<div class="gatsby-highlight" data-language="no-highlight"><pre class="language-no-highlight"><code class="language-no-highlight">Here&#39;s our logo (hover to see the title text):\n\nInline-style:\n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png &quot;Logo Title Text 1&quot;)\n\nReference-style:\n![alt text][logo]\n\n[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png &quot;Logo Title Text 2&quot;</code></pre></div>\n<p>Here\'s our logo (hover to see the title text):</p>\n<p>Inline-style:\n<img src="https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png" alt="alt text" title="Logo Title Text 1"></p>\n<p>Reference-style:\n<img src="https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png" alt="alt text" title="Logo Title Text 2"></p>\n<a name="code"/>\n<h2 id="code-and-syntax-highlighting" style="position:relative;"><a href="#code-and-syntax-highlighting" aria-label="code and syntax highlighting permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Code and Syntax Highlighting</h2>\n<p>Code blocks are part of the Markdown spec, but syntax highlighting isn\'t. However, many renderers -- like Github\'s and <em>Markdown Here</em> -- support syntax highlighting. <em>Markdown Here</em> supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); to see the complete list, and how to write the language names, see the <a href="http://softwaremaniacs.org/media/soft/highlight/test.html">highlight.js demo page</a>.</p>\n<div class="gatsby-highlight" data-language="no-highlight"><pre class="language-no-highlight"><code class="language-no-highlight">Inline `code` has `back-ticks around` it.</code></pre></div>\n<p>Inline <code class="language-text">code</code> has <code class="language-text">back-ticks around</code> it.</p>\n<p>Blocks of code are either fenced by lines with three back-ticks <code>`<code class="language-text"></code></code>, or are indented with four spaces. I recommend only using the fenced code blocks -- they\'re easier and only they support syntax highlighting.</p>\n<pre lang="no-highlight"><code>```javascript\nvar s = "JavaScript syntax highlighting";\nalert(s);\n```\n\n```python\ns = "Python syntax highlighting"\nprint s\n```\n\n```\nNo language indicated, so no syntax highlighting.\nBut let\'s throw in a &lt;b&gt;tag&lt;/b&gt;.\n```\n</code></pre>\n<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token string">"JavaScript syntax highlighting"</span><span class="token punctuation">;</span>\n<span class="token function">alert</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>\n<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python">s <span class="token operator">=</span> <span class="token string">"Python syntax highlighting"</span>\n<span class="token keyword">print</span> s</code></pre></div>\n<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">No language indicated, so no syntax highlighting in Markdown Here (varies on Github).\nBut let&#39;s throw in a &lt;b&gt;tag&lt;/b&gt;.</code></pre></div>\n<p>Again, to see what languages are available for highlighting, and how to write those language names, see the <a href="http://softwaremaniacs.org/media/soft/highlight/test.html">highlight.js demo page</a>.</p>\n<a name="tables"/>\n<h2 id="tables" style="position:relative;"><a href="#tables" aria-label="tables permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tables</h2>\n<p>Tables aren\'t part of the core Markdown spec, but they are part of GFM and <em>Markdown Here</em> supports them. They are an easy way of adding tables to your email -- a task that would otherwise require copy-pasting from another application.</p>\n<div class="gatsby-highlight" data-language="no-highlight"><pre class="language-no-highlight"><code class="language-no-highlight">Colons can be used to align columns.\n\n| Tables        | Are           | Cool  |\n| ------------- | :-----------: | ----: |\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      | $12   |\n| zebra stripes | are neat      | $1    |\n\nThe outer pipes (|) are optional, and you don&#39;t need to make the raw Markdown line up prettily. You can also use inline Markdown.\n\n| | Markdown | Less           | Pretty     |     |\n| | ------------- | --------------- | ---------- |------- |\n| | *Still*   | `renders` | **nicely** | |\n| | 1               | 2                 | 3          |          |</code></pre></div>\n<p>Colons can be used to align columns.</p>\n<table>\n<thead>\n<tr>\n<th>Tables</th>\n<th align="center">Are</th>\n<th align="right">Cool</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>col 3 is</td>\n<td align="center">right-aligned</td>\n<td align="right">$1600</td>\n</tr>\n<tr>\n<td>col 2 is</td>\n<td align="center">centered</td>\n<td align="right">$12</td>\n</tr>\n<tr>\n<td>zebra stripes</td>\n<td align="center">are neat</td>\n<td align="right">$1</td>\n</tr>\n</tbody>\n</table>\n<p>The outer pipes (|) are optional, and you don\'t need to make the raw Markdown line up prettily. You can also use inline Markdown.</p>\n<table>\n<thead>\n<tr>\n<th>Markdown</th>\n<th>Less</th>\n<th>Pretty</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><em>Still</em></td>\n<td><code class="language-text">renders</code></td>\n<td><strong>nicely</strong></td>\n</tr>\n<tr>\n<td>1</td>\n<td>2</td>\n<td>3</td>\n</tr>\n</tbody>\n</table>\n<a name="blockquotes"/>\n<h2 id="blockquotes" style="position:relative;"><a href="#blockquotes" aria-label="blockquotes permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Blockquotes</h2>\n<div class="gatsby-highlight" data-language="no-highlight"><pre class="language-no-highlight"><code class="language-no-highlight">&gt; Blockquotes are very handy in email to emulate reply text.\n&gt; This line is part of the same quote.\n\nQuote break.\n\n&gt; This is a very long line that will still be quoted properly when it wraps. Oh boy let&#39;s keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.</code></pre></div>\n<blockquote>\n<p>Blockquotes are very handy in email to emulate reply text.\nThis line is part of the same quote.</p>\n</blockquote>\n<p>Quote break.</p>\n<blockquote>\n<p>This is a very long line that will still be quoted properly when it wraps. Oh boy let\'s keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can <em>put</em> <strong>Markdown</strong> into a blockquote.</p>\n</blockquote>\n<a name="html"/>\n<h2 id="inline-html" style="position:relative;"><a href="#inline-html" aria-label="inline html permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Inline HTML</h2>\n<p>You can also use raw HTML in your Markdown, and it\'ll mostly work pretty well.</p>\n<div class="gatsby-highlight" data-language="no-highlight"><pre class="language-no-highlight"><code class="language-no-highlight">&lt;dl&gt;\n  &lt;dt&gt;Definition list&lt;/dt&gt;\n  &lt;dd&gt;Is something people use sometimes.&lt;/dd&gt;\n\n  &lt;dt&gt;Markdown in HTML&lt;/dt&gt;\n  &lt;dd&gt;Does *not* work **very** well. Use HTML &lt;em&gt;tags&lt;/em&gt;.&lt;/dd&gt;\n&lt;/dl&gt;</code></pre></div>\n<dl>\n  <dt>Definition list</dt>\n  <dd>Is something people use sometimes.</dd>\n  <dt>Markdown in HTML</dt>\n  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>\n</dl>\n<a name="hr"/>\n<h2 id="horizontal-rule" style="position:relative;"><a href="#horizontal-rule" aria-label="horizontal rule permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Horizontal Rule</h2>\n<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">Three or more...\n\n---\n\nHyphens\n\n***\n\nAsterisks\n\n___\n\nUnderscores</code></pre></div>\n<p>Three or more...</p>\n<hr>\n<p>Hyphens</p>\n<hr>\n<p>Asterisks</p>\n<hr>\n<p>Underscores</p>\n<a name="lines"/>\n<h2 id="line-breaks" style="position:relative;"><a href="#line-breaks" aria-label="line breaks permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Line Breaks</h2>\n<p>My basic recommendation for learning how line breaks work is to experiment and discover -- hit &#x3C;Enter> once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens. You\'ll soon learn to get what you want. "Markdown Toggle" is your friend.</p>\n<p>Here are some things to try out:</p>\n<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">Here&#39;s a line for us to start with.\n\nThis line is separated from the one above by two newlines, so it will be a *separate paragraph*.\n\nThis line is also a separate paragraph, but...\nThis line is only separated by a single newline, so it&#39;s a separate line in the *same paragraph*.</code></pre></div>\n<p>Here\'s a line for us to start with.</p>\n<p>This line is separated from the one above by two newlines, so it will be a <em>separate paragraph</em>.</p>\n<p>This line is also begins a separate paragraph, but...\nThis line is only separated by a single newline, so it\'s a separate line in the <em>same paragraph</em>.</p>\n<p>(Technical note: <em>Markdown Here</em> uses GFM line breaks, so there\'s no need to use MD\'s two-space line breaks.)</p>\n<a name="videos"/>\n<h2 id="youtube-videos" style="position:relative;"><a href="#youtube-videos" aria-label="youtube videos permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>YouTube Videos</h2>\n<p>They can\'t be added directly but you can add an image with a link to the video like this:</p>\n<div class="gatsby-highlight" data-language="no-highlight"><pre class="language-no-highlight"><code class="language-no-highlight">&lt;a href=&quot;http://www.youtube.com/watch?feature=player_embedded&amp;v=8AkLfYOgIrE\n&quot; target=&quot;_blank&quot;&gt;&lt;img src=&quot;http://img.youtube.com/vi/8AkLfYOgIrE/0.jpg&quot;\nalt=&quot;IMAGE ALT TEXT HERE&quot; width=&quot;240&quot; height=&quot;180&quot; border=&quot;10&quot; /&gt;&lt;/a&gt;</code></pre></div>\n<p>Or, in pure Markdown, but losing the image sizing and border:</p>\n<div class="gatsby-highlight" data-language="no-highlight"><pre class="language-no-highlight"><code class="language-no-highlight">[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)</code></pre></div>',
  timeToRead: 8,
  excerpt:
    'NOTE: This "post" is based on Markdown Cheatsheet and is meant to test styling of Markdown generated documents. This is intended as a quick…',
  frontmatter: {
    title: "Big Test",
    cover: "5.jpg",
    date: "2018-03-01",
    category: "moar",
    tags: ["test", "huge"],
  },
  fields: {
    slug: "/big-sample-test",
    date: "2018-02-28T20:00:00.000Z",
  },
};

module.exports = {
  allMarkdownRemark,
  markdownRemark,
};
