import React, { Component } from 'react';
import Helmet from 'react-helmet';
import config from '../../../data/SiteConfig';

class PostSEO extends Component {
  render() {
    const { postNode, postPath } = this.props;
    const postMeta = postNode.frontmatter;
    const title = postMeta.title;
    const description = postMeta.description ? postMeta.description : postNode.excerpt;
    const image = postMeta.cover;
    const blogURL = config.siteUrl + config.pathPrefix;
    const postURL = config.siteUrl + config.pathPrefix + postPath;
    const schemaOrgJSONLD = {
      '@context': 'http://schema.org',
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
      itemListElement: [{
        '@type': 'ListItem',
        position: 1,
        item: {
          '@id': postURL,
          name: title,
          image,
        },
      },
      ],
      '@type': 'BlogPosting',
      headline: title,
      image: {
        '@type': 'ImageObject',
        url: image,
      },
      description,
    };
    return (
      <Helmet>
        {/* General tags */}
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      </Helmet>
    );
  }
}

export default PostSEO;
