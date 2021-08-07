import * as xml2js from "xml2js";

type RssData = {
  rss?: {
    channel?: { link?: string[]; item?: { link?: string[] }[] }[];
  };
};

type SiteMapData = {
  urlset?: {
    url?: { loc?: string[] }[];
  };
};

type ParseSitemapArgs = { siteUrl: string; sitemapString: string };

const pluginConfig: Cypress.PluginConfig = (on) => {
  on("task", {
    // Parse the RSS feed and return a list of links to posts
    parseRss(rssString: string) {
      return xml2js.parseStringPromise(rssString).then((res) => {
        const rssData = res as RssData;

        const items = rssData?.rss?.channel[0]?.item;

        const siteUrl = rssData.rss.channel[0].link[0];

        return items.map((item) => item.link[0].replace(siteUrl, ""));
      });
    },
    // Parse the sitemap and return the list of website URLs
    parseSitemap({ siteUrl, sitemapString }: ParseSitemapArgs) {
      return xml2js.parseStringPromise(sitemapString).then((res) => {
        const siteMapData = res as SiteMapData;

        const urls = siteMapData.urlset.url;

        return urls.map((url) => url.loc[0].replace(siteUrl, ""));
      });
    },
  });
};

export default pluginConfig;
