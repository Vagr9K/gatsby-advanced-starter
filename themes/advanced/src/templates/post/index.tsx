import React from "react";

import SEO from "../../components/SEO";

import {
  BlogPostBySlugQuery,
  PostFromJsonList,
  queryIntoPost,
} from "../../types";

type PageContext = {
  relatedPosts: PostFromJsonList;
};

export type PostTemplateProps = {
  data: BlogPostBySlugQuery;
  pageContext: PageContext;
};

const PostTemplate = ({
  data,
  pageContext,
}: PostTemplateProps): JSX.Element => {
  const post = queryIntoPost(data);

  return (
    <>
      <SEO post={post} />
      <pre>
        <code>{JSON.stringify(post, null, 2)}</code>
      </pre>
      <pre>
        <code>{JSON.stringify(pageContext, null, 2)}</code>
      </pre>
    </>
  );
};

export default PostTemplate;
