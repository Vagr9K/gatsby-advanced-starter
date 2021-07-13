import urlJoin from "url-join";
import { merge } from "lodash";

import validateSiteConfig from "./Validator";
import baseConfig from "./defaultConfig";
import { SiteConfig } from "./types";

const validatedConfig = validateSiteConfig(baseConfig);

export type {
  SiteConfig,
  OrganizationData,
  UserData,
  WebsiteData,
} from "./types";

export { default as schema } from "./schema";
export { default as constants } from "./constants";

export const defaultConfig = validatedConfig;

export const withDefaults = (userConfig: SiteConfig): Readonly<SiteConfig> =>
  merge(defaultConfig, userConfig);

export const withBasePath = (config: SiteConfig, url: string): string =>
  config.basePath ? urlJoin(config.basePath, url) : url;
