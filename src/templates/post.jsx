import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/Filters/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import "../layout/index.css";

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />

          <div className="interviewPattern">

            <Img 
              fluid={post.featuredImage.childImageSharp.fluid} 
              className="featuredImage"
              alt={post.alt}
            />

            <div className="titleBin">
              <h1>{post.title}</h1>

              <h2><a target="_blank" href={post.studio[1]}>{post.studio[0]}</a></h2>
              
              <ul>
                <a target="_blank" href={post.linkA[1]}>{post.linkA[0]}</a>
                <a target="_blank" href={post.linkB[1]}>{post.linkB[0]}</a>
                <a target="_blank" href={post.linkC[1]}>{post.linkC[0]}</a>
                <a target="_blank" href={post.linkD[1]}>{post.linkD[0]}</a>
              </ul>
              <PostTags tags={post.tags} />
            </div>



            <div className="interviewContainer">

              <div className="episode">

                {/* Interview content, all formatting of this content should happen in MD file */}
                <article>
                  <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
                </article>
                
                <div className="post-share">
                  <SocialLinks postPath={slug} postNode={postNode} />
                  <UserInfo config={config} />
                  <Disqus postNode={postNode} />
                  <Footer config={config} />
                </div>
              </div>
              {/* end post content */}

            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date
        category
        tags
        studio
        linkA
        linkB
        linkC
        linkD
        alt
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
        date
      }
  }
}
`;
