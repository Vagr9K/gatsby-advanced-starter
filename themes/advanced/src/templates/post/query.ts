import { graphql } from "gatsby";

import PostTemplate from "./index";

const TemplateCompnent = PostTemplate;

export const PostTemplateQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      timeToRead
      excerpt
      frontmatter {
        title
        description
        cover {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
        coverAlt
        datePublished
        dateModified
        category
        tags
      }
      fields {
        slug
        route
        pathName
        url
      }
      internal {
        content
      }
    }
  }
`;

export default TemplateCompnent;
