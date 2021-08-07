export const schema = `#graphql
  type WebsiteData {
    title: String!
    titleShort: String!
    name: String!
    description: String!
    language: String!
    logoUrl: String!
    fbAppId: String
    twitterName: String
    url: String!
    copyright: String!
    rss: String!
    rssTitle: String!
    googleAnalyticsId: String
    disqusShortname: String
    themeColor: String!
    backgroundColor: String!
  }

  type UserData {
    id: String!
    firstName: String!
    lastName: String!
    twitterName: String
    linkedIn: String
    github: String
    email: String!
    location: String!
    about: String!
    avatar: String!
  }

  type OrganizationData {
    name: String!
    description: String!
    logoUrl: String!
    url: String!
  }

  type IconManifest {
    src: String!
    sizes: String!
    type: String!
    purpose: String
  }


  type  SiteConfig {
    website: WebsiteData!
    user: UserData
    organization: OrganizationData

    pathPrefix: String!

    contentDir: String
    assetDir: String

    embeddedImageWidth: Int!
    embeddedVideoWidth: Int!

    iconPath: String
    iconList: [IconManifest]!
    iconCachePaths: [String]

    basePath: String
  }

  type SiteSiteMetadata {
    config: SiteConfig!
  }
`;

export default schema;
