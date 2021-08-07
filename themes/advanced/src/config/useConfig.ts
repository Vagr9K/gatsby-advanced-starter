import { useStaticQuery, graphql } from "gatsby";
import { SiteConfig } from "./types";

type UserConfigQueryType = {
  site?: {
    siteMetadata?: {
      config?: SiteConfig;
    };
  };
};

const useConfig = (): SiteConfig => {
  const resp = useStaticQuery<UserConfigQueryType>(
    graphql`
      query UserConfig {
        site {
          siteMetadata {
            config {
              contentDir
              assetDir
              embeddedImageWidth
              embeddedVideoWidth
              basePath
              iconPath
              iconCachePaths
              iconList {
                src
                sizes
                type
                purpose
              }
              organization {
                description
                logoUrl
                name
                url
              }
              pathPrefix
              user {
                about
                avatar
                firstName
                github
                email
                id
                lastName
                linkedIn
                location
                twitterName
              }
              website {
                backgroundColor
                copyright
                description
                language
                fbAppId
                googleAnalyticsId
                disqusShortname
                logoUrl
                name
                rss
                rssTitle
                themeColor
                title
                titleShort
                twitterName
                url
              }
            }
          }
        }
      }
    `
  );

  const config = resp.site?.siteMetadata?.config;

  if (!config) throw Error("useConfig: Failed to query SiteConfig.");

  return config;
};

export default useConfig;
