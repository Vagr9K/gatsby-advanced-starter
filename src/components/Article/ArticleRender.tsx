import React from "react";

import { MDXRenderer } from "gatsby-plugin-mdx";
import MDXTheme from "./MdxTheme";

import { ArticleWidthContainer } from "../shared/WidthContainer";
import { Post } from "../../types";

type PostTemplateProps = {
  post: Post;
};

const PostTemplate = ({ post }: PostTemplateProps): JSX.Element => {
  if (!post.body)
    throw Error(
      `PostTemplate: post date doesn't contain MDX body for rendering. Aborting. Post slug: ${post.slug}`
    );

  return (
    <ArticleWidthContainer>
      <MDXTheme>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXTheme>
    </ArticleWidthContainer>
  );
};

export default PostTemplate;
