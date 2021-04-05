import validateSiteConfig from "./Validator";
import userConfig from "../../data/SiteConfig";

const validatedConfig = validateSiteConfig(userConfig);

export type {
  SiteConfig,
  OrganizationData,
  UserData,
  WebsiteData,
} from "./types";
export default validatedConfig;
