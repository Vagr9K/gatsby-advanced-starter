import React, { Component } from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../components/MainLayout/MainLayout.jsx';
import About from '../components/About/About.jsx';

class AboutPage extends Component {
  render() {
    const config = this.props.data.site.siteMetadata;
    return (
      <MainLayout SiteConfig={config} location={this.props.location.pathname}>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />
          <About />
        </div>
      </MainLayout>
    );
  }
}

export default AboutPage;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query AboutQuery {
    site {
      pathPrefix
      siteMetadata {
        siteTitle
        disqusShortname
        postDefaultCategoryID
        userName
        userLocation
        userAvatar
        userDescription
        userLinks {
          label
          url
          iconClassName
        }
        copyright
    }
  }
}
`;
