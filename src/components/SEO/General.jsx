import React from "react";

const GeneralTags = ({ seoData, websiteData }) => {
  const { title, description, imageUrl } = seoData;
  const { faviconUrl } = websiteData;

  return [
    <title key="gen-title">{title}</title>,
    <meta name="description" content={description} key="gen-desc" />,
    <meta name="image" content={imageUrl} key="gen-image" />,
    <link rel="shortcut icon" href={faviconUrl} key="gen-fav" />,
  ];
};

export default GeneralTags;
