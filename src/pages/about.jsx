import React, { Component } from 'react';
import Helmet from 'react-helmet';
import About from '../components/About/About.jsx';

class AboutPage extends Component {
  render() {
    const config = this.props.data.site.siteMetadata;
    return (
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <About />
      </div>
    );
  }
}

export default AboutPage;
