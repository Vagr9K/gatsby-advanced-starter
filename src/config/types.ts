export interface WebsiteData {
  title: string;
  titleShort: string;
  name: string;
  description: string;
  logoUrl: string;
  fbAppId?: string;
  twitterName?: string;
  url: string;
  copyright: string;
  rss: string;
  rssTitle: string;
  googleAnalyticsId?: string;
  themeColor: string;
  backgroundColor: string;
}

export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  twitterName?: string;
  linkedIn?: string;
  github?: string;
  email: string;
  location: string;
  about: string;
  avatar: string;
}

export interface OrganizationData {
  name: string;
  description: string;
  logoUrl: string;
  url: string;
}

export interface SiteConfig {
  website: WebsiteData;
  user?: UserData;
  organization?: OrganizationData;

  pathPrefix: string;

  postsPerFeedPage: number;
  feedMetaDirectory: string;

  contentDir: string;
  assetDir: string;

  embededImageWidth: number;
  embededVideoWidth: number;
}
