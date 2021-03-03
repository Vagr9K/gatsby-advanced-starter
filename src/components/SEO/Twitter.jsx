import React from "react";

const TwitterTags = ({ seoData, userData, websiteData }) => {
  const { title, description, imageUrl, imageAlt } = seoData;
  const userTwitterName = userData.twitterName;
  const siteTwitterName = websiteData.twitterName;

  const tagList = [
    <meta name="twitter:card" content="summary_large_image" />,
    <meta name="twitter:title" content={title} />,
    <meta name="twitter:description" content={description} />,
    <meta name="twitter:image" content={imageUrl} />,
    <meta name="twitter:image:alt" content={imageAlt} />,
  ];

  if (userTwitterName) {
    tagList.push(<meta name="twitter:creator" content={userTwitterName} />);
  }

  if (siteTwitterName) {
    tagList.push(<meta name="twitter:site" content={siteTwitterName} />);
  }

  return tagList.map((tag) => ({ ...tag, key: tag.props.name }));
};

export default TwitterTags;
