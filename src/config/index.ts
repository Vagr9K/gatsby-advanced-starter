import validateSiteConfig from "./Validator";
import baseConfig from "./defaultConfig";

const validatedConfig = validateSiteConfig(baseConfig);

export type {
  SiteConfig,
  OrganizationData,
  UserData,
  WebsiteData,
} from "./types";

export const defaultConfig = validatedConfig;
