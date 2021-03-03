import React from "react";

const createArticleTagList = (postData, userData) => {
  const metaTags = [
    <meta property="article:published_time" content={postData.publishedDate} />,
    <meta property="article:modified_time" content={postData.modifiedTime} />,
    <meta
      property="article:author"
      content="http://examples.opengraphprotocol.us/profile.html"
    />,
    <meta property="profile:first_name" content={userData.firstName} />,
    <meta property="profile:last_name" content={userData.lastName} />,
    <meta property="profile:username" content={userData.id} />,
    <meta property="article:section" content={postData.category} />,
  ];

  postData.tags.forEach((tag) => {
    metaTags.push(<meta property="article:tag" content={tag} />);
  });

  return metaTags;
};

const OpenGraphTags = ({ seoData, websiteData, userData, postData }) => {
  const {
    isArticle,
    type,
    title,
    imageUrl,
    imageAlt,
    url,
    description,
  } = seoData;

  const siteName = websiteData.name;

  const metaTags = [
    <meta property="og:title" content={title} />,
    <meta property="og:type" content={type} />,
    <meta property="og:image" content={imageUrl} />,
    <meta property="og:image:alt" content={imageAlt} />,
    <meta property="og:url" content={url} />,
    <meta property="og:description" content={description} />,
    <meta property="og:site_name" content={siteName} />,
  ];

  if (websiteData.fbAppId)
    metaTags.push(<meta property="fb:app_id" content={websiteData.fbAppId} />);

  if (isArticle) metaTags.push(...createArticleTagList(postData, userData));

  // Add unique keys and return
  return metaTags.map((tag) => ({
    ...tag,
    key: `${tag.props.property}-${tag.props.content}`,
  }));
};

export default OpenGraphTags;
