<div align="center" style="margin-bottom:30px">
    <a href='https://github.com/vagr9k/gatsby-advanced-starter/blob/master/LICENSE'>
    <img src="https://img.shields.io/github/license/vagr9k/gatsby-advanced-starter.svg" alt="Logo" />
    </a>
    <a href='https://github.com/vagr9k/gatsby-advanced-starter'>
    <img src="https://img.shields.io/github/v/tag/Vagr9K/gatsby-advanced-starter" alt="Logo" />
    </a>
        <a href='https://github.com/vagr9k/gatsby-advanced-starter/stargazers'>
    <img src="https://img.shields.io/github/stars/Vagr9K/gatsby-advanced-starter" alt="Logo" />
    </a>
        <a href="https://twitter.com/intent/tweet?text=A%20cool%20%40gatsbyjs%20starter%3A&url=https%3A%2F%2Fgithub.com%2FVagr9K%2Fgatsby-advanced-starter">
    <img src="https://img.shields.io/twitter/url/https/github.com/vagr9k/gatsby-advanced-starter.svg?style=social" alt="Logo" />
    </a>
</div>

<div align="center"  style="margin-bottom:30px">
    <img src="docs/logos/logo.png" alt="Logo" width='400px' height='400px'/>
</div>

<div align="center"  style="margin-bottom:30px">
<a href="https://www.npmjs.com/package/gatsby-theme-advanced"><img src="https://badgen.net/npm/v/gatsby-theme-advanced" alt="npm" /></a>
<a href='https://coveralls.io/github/Vagr9K/gatsby-advanced-starter?branch=master'><img src='https://coveralls.io/repos/github/Vagr9K/gatsby-advanced-starter/badge.svg?branch=master' alt='Coverage Status' /></a>
<a href="https://www.npmjs.com/package/gatsby-theme-amaranth"><img src="https://badgen.net/npm/v/gatsby-theme-amaranth" alt="npm" /></a>
<a href="https://codecov.io/gh/Vagr9K/gatsby-advanced-starter">
  <img src="https://codecov.io/gh/Vagr9K/gatsby-advanced-starter/branch/master/graph/badge.svg?token=UsUNVAmMLr"/>
</a>
<a href="https://www.styled-components.com/"><img src="https://badgen.net/badge/Built%20With/styled%20components/db7093" alt="Built with Styled Components" />
</a>
<img src="https://badgen.net/badge/Built With/TypeScript/blue" alt="Powered by TypeScript" />
<img href="https://advanced-demo.netlify.app/"><img src="https://api.netlify.com/api/v1/badges/69abdfee-1df9-4e69-abe9-e8f5d8c9c630/deploy-status" alt="Advanced Demo"/></a>
<img href="https://amaranth-demo.netlify.app/"><img src="https://api.netlify.com/api/v1/badges/f9d33573-f168-4ff2-a6e6-e1a7570dd5a0/deploy-status" alt="Amaranth Demo"/></a>
</div>

<div align="center"  style="margin-bottom:30px">
<img href="https://open.vscode.dev/vagr9k/gatsby-advanced-starter"><img src="https://open.vscode.dev/badges/open-in-vscode.svg"/></a>
</div>

# Gatsby Advanced Starter

A starter skeleton with advanced features for [Gatsby](https://github.com/gatsbyjs/gatsby/).

This starter aims to provide a minimal base for building advanced GatsbyJS powered websites by using the latest technologies to simplify your process.

It doesn't define any UI limitations in any way and only gives you the basic components for SEO/Links/Infinite Scrolling while creating a comfortable development environment to get started.

Starter supports both [TypeScript](https://www.typescriptlang.org/) and JavaScript, comes with [Jest](https://jestjs.io/) and [Cypress](https://www.cypress.io/) configurations and allows you to write Unit/Integration/E2E tests out of the box.

You are free to use any UI framework/styling options or you can use the [`gatsby-theme-amaranth`](https://www.npmjs.com/package/gatsby-theme-amaranth) as a starting point, which provides a stylish blog design styled with [Styled Components](https://styled-components.com/)

## Demos

[With `gatsby-theme-advanced`](https://advanced-demo.netlify.app/)

[With `gatsby-theme-amaranth`](https://amaranth-demo.netlify.app/).

## Features

- Gatsby v4 support
- First class [TypeScript](https://www.typescriptlang.org/) support (for query data and components exposed by the theme)
- Styled Components used for styling
- Posts in MDX
  - Code syntax highlighting
  - Embed videos
  - Embed iframes
- Infinite Scrolling
- React Query for client side API calls
- Tags
  - Separate page for posts under each tag
- Categories
  - Separate page for posts under each category
- Social features
  - Twitter tweet button
  - Facebook share/share count
  - Reddit share/share count
  - LinkedIn share button
- Author section
- Related posts computation and display based on category/tag match ranking
- [Disqus](https://disqus.com/) support
- [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/) for optimized image generation
- Inline SVG imports
- High configurability
- Separate components for everything:
  - Gatsby Link utilities
  - SEO
  - Disqus
- PWA features
  - Offline support
  - Web App Manifest support
  - Loading progress for slow networks
- SEO
  - [Google gtag.js](https://developers.google.com/gtagjs/) support
  - Sitemap generation
  - General description tags
  - [Google Structured Data](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data)
  - [OpenGraph Tags (Facebook/Google+/Pinterest)](https://ogp.me/)
  - [Twitter Tags (Twitter Cards)](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup)
- RSS feeds
- Development tools
  - Yarn 3
  - [Jest](https://jestjs.io/) for unit/integration testing
  - [Cypress](https://www.cypress.io/) for E2E testing
  - CI via GitHub Actions
  - CD via GitHub Actions
  - [ESLint](https://eslint.org/) for linting
  - [Prettier](https://prettier.io/) for code formatting
  - [React Hooks Linting](https://www.npmjs.com/package/eslint-plugin-react-hooks)
  - Remark-Lint for linting Markdown
  - write-good for linting English prose
  - gh-pages for deploying to GitHub pages
  - [Netlify](https://www.netlify.com/) deploy configuration

## Getting Started

Install this starter by running the following commands from your CLI:

```sh
gatsby new YourProjectName https://github.com/Vagr9K/gatsby-advanced-starter
cd YourProjectName
yarn develop # or gatsby develop
```

Note that the [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli) needs to be installed and updated for the `gatsby` command to work.

Alternatively you can fork the project, make your changes and merge new upstream features when needed:

- [Fork this repository on GitHub](https://github.com/Vagr9K/gatsby-advanced-starter/fork)
- Run the following commands:

  ```sh
  git clone https://github.com/${YourUsername}/${YourForkName} YourForkName # Clone your fork
  cd YourForkName
  yarn install # or yarn install
  yarn develop # or yarn develop
  ```

## Receiving upstream updates

You have multiple options when it comes to receiving upstream updates:

- Pull and merge upstream changes into your repo
- Change the versions of `gatsby-theme-advanced` and `gatsby-theme-amaranth` from local to remote.
- Install a different theme, such as the [`gatsby-theme-material`](https://www.npmjs.com/package/gatsby-theme-material).

First option allows you to make your own changes to the themes without having to fork and publish them. This is the default approach when you clone/fork the starter repository.

Second option simplifies your CI/CD setup and allows you to receive updates by simply bumping the package version. This also applies if you decide to use a different theme with the starter.

To switch to the remote versions, open `package.json` and edit the dependency section:

```js
 "gatsby-theme-amaranth": "*",
 // or
  "gatsby-theme-advanced": "*",
```

into

```js
 "gatsby-theme-amaranth": "3.2", // Or the version you want
 // or
  "gatsby-theme-advanced": "3.2", // Or the version you want
```

If you want to install a different theme outside of the repo, such as the [`gatsby-theme-material`](https://www.npmjs.com/package/gatsby-theme-material), run:

```sh
yarn add gatsby-theme-material # Or any other Gatsby theme
```

Then configure the theme in `gatsby-config.js`:

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-material`, // Or any other theme that you have installed
      options: {
        basePath: `/blog`, // Consult the documentation of the respective theme to figure out the applicable settings
      },
    },
  ],
};
```

## Configuration

### Select a starting point

To configure the theme edit your `gatsby-config.js`:

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-advanced`,
      options: {
        basePath: `/blog`,
      },
    },
  ],
};
```

Here you can switch between `gatsby-theme-advanced` and `gatsby-theme-amaranth` or any other Gatsby theme that you intend to use with the starter.

For configuring the themes, consult their respective documentation pages:

- [Advanced](themes/advanced/README.md)
- [Amaranth](themes/amaranth/README.md)

### NetlifyCMS

First of all, make sure to edit `static/admin/config.yml` and add your [GitHub/GitLab/NetlifyId credentials](https://www.netlifycms.org/docs/authentication-backends/):

```yml
backend:
  name: github # Refer to https://www.netlifycms.org/docs/authentication-backends/ for auth backend list and instructions
  branch: master # Branch to update
  repo: vagr9k/gatsby-material-starter # Repo for pushing new commits. Make sure to replace with your repo!
```

You can visit `/admin/` after and will be greeted by a login dialog (depending on the auth provider you ave chosen above).

If want to customize Netlify CMS, e.g. registering custom widgets or styling the preview pane, you can do so by editing `src/netlifycms/index.js`:

```js
import CMS from "netlify-cms-app";

CMS.init({
  config: {
    backend: {
      name: "git-gateway",
    },
  },
});
```

For NetlifyCMS specific issues visit the [official documentation](https://www.netlifycms.org/docs/intro/).

### Contributing

If you have any issues, questions or suggestions related to the starter then feel free to bring them up!

If you'd like to contribute to the repository and need some pointers, take a look at the [Contribution Guide](./.github/CONTRIBUTING.md).

# Author

Ruben Harutyunyan ([@Vagr9K](https://twitter.com/Vagr9K))
