<div align="center">
    <img src="docs/logo.png" alt="Logo" width='200px' height='200px'/>
</div>

# Gatsby Material Starter
A blog starter with Material design in mind for [Gatsby](https://github.com/gatsbyjs/gatsby/).

![Screenshot](docs/screenshot.png)

[Demo website.](https://vagr9k.github.io/gatsby-material-starter/)

## Features

* [React-MD](https://github.com/mlaursen/react-md) for Material design.
* Separate components for everything.
* Ablity to set external links to projects/social profiles you want to share from config files.
* Disqus support.
* Google Analytics support.
* Integrated FontAwesome support.
* Integrated Material Icons support.
* Responsive design.
* Ability to set and display author information from `config.toml`.
* NPM script for GitHUB Pages deployment.

![Author Screenshot](docs/screenshot-author.png)
![Article Screenshot](docs/screenshot-article.png)

## Getting Started

Install this starter (assuming [Gatsby](https://github.com/gatsbyjs/gatsby/) is installed) by running from your CLI:

```sh
gatsby new YourProjectName https://github.com/Vagr9K/gatsby-material-starter
npm run serve
```

Alternatively:

```sh
git clone https://github.com/Vagr9K/gatsby-material-starter YourProjectName # Clone the project
cd YourProjectname
rm -rf .git # So you can have your own changes soter in VCS.
npm install # or yarn
npm run serve
```

## Configuration

 Edit `config.toml`

 ```toml
siteTitle="Gatsby Material Starter" # Site title
linkPrefix = "/"  # Gatsby link prefix
googleAnalyticsID = '' # GA id
disqusShortname = '' # Disqus shortname

postDefaultCategoryID= '12121212' # Disqus category for posts without categories.
userName = "Material User" # Your public name
userLocation = "Yerevan, Armenia" # Your location
userAvatar = "https://api.adorable.io/avatars/150/test.png" # Your avatar
userDescription = "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people." # Your short "about me"

# An array of links to you projects/social profiles you want to share
# FORMAT: ['LABEL', 'LINK', 'ICON CLASSNAME']
# ICON CLASSNAME can be either FontAwesome or Material Design icon classnames.
userLinks = [
     ['Website', '//mywebsite.example.local', 'fa fa-link'],
     ['GitHub', '//github.com.local/USER', 'fa fa-github'],
     ['Twitter', '//twitter.local/USER', 'fa fa-twitter'],
     ['Instagram', '//instagram.local/USER', 'fa fa-instagram'],
     ['Facebook', '//facebook.com.local/USER', 'fa fa-facebook'],
     ['Email', 'mailto:gmail.com.local/USER', 'fa fa-envelope'],
]

copyright = "Copyright © 2017. Material User" # Footer copyright
 ```

 NOTE: All configuration variables except for `siteTitle` and `linkPrefix` are optional and won't render of omitted.

## Theming

Edit `pages/theme.scss` to suit your needs.
You can use [Material color palette](https://react-md.mlaursen.com/customization/colors) provided by React-MD.

```css
@import '~react-md/src/scss/react-md';
$md-primary-color: $md-deep-orange-500;
$md-secondary-color: $md-red-400;
$md-tertiary-color: $md-grey-300;
```

## Roadmap

* Tag pages support. (*)
* Category pages support. (*)
* Social sharing component.
* Search.

Items denoted with `*` are possibly halted until Gatsby 1.0 release with dynamic routing support.