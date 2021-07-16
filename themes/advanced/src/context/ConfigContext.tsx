import * as React from "react";

import { useStaticQuery, graphql } from "gatsby";
import { defaultConfig, SiteConfig } from "../config";

const ConfigContext = React.createContext<SiteConfig>(defaultConfig);

type ConfigProviderProps = {
  children: React.ReactNode;
};

const ConfigProvider = ({ children }: ConfigProviderProps): JSX.Element => {
  // Query and provide SiteConfig
  const resp = useStaticQuery<GatsbyTypes.UserConfigQuery>(
    graphql`
      query UserConfig {
        site {
          siteMetadata {
            config {
              contentDir
              assetDir
              embededImageWidth
              embededVideoWidth
              basePath
              iconPath
              iconCachePath
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

  if (!config) throw Error("ConfigProvider: Failed to query SiteConfig.");

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};
export default ConfigContext;
export { ConfigProvider };
