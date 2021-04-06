import * as React from "react";
import { WebsiteData } from "../../config";
import { SeoData } from "./types";

const GeneralTags = (
  seoData: SeoData,
  websiteData: WebsiteData
): React.ReactElement[] => {
  const { title, description, imageUrl } = seoData;
  const { logoUrl } = websiteData;

  const tags = [
    <title key="gen-title">{title}</title>,
    <link rel="shortcut icon" href={logoUrl} key="gen-fav" />,
  ];

  if (description)
    tags.push(<meta name="description" content={description} key="gen-desc" />);

  if (imageUrl)
    tags.push(<meta name="image" content={imageUrl} key="gen-image" />);

  return tags;
};

export default GeneralTags;
