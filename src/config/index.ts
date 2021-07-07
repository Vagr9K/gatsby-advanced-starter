import validateSiteConfig from "./Validator";
import baseConfig from "./defaultConfig";

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
