export interface WebsiteData {
  title: string;
  titleShort: string;
  name: string;
  description: string;
  logoUrl: string;
  fbAppId?: string;
  twitterName?: string;
  url: string;
  rss: string;
  rssTitle: string;
}

export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  twitterName?: string;
  email: string;
  location: string;
  avatar: string;
  links?: {
    label: string;
    url: string;
  }[];
}

export interface OrganizationData {
  name: string;
  description: string;
  logoUrl: string;
  url: string;
}

export interface SiteConfig {
  website: WebsiteData;
  user: UserData;
  organization: OrganizationData;
  pathPrefix: string;
  googleAnalyticsID?: string;
  disqusShortname?: string;
  postsPerPage: number;
  copyright: string;
  themeColor: string;
  backgroundColor: string;
}
