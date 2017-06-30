import React, { Component } from 'react';
import { config } from 'config';
import Helmet from 'react-helmet';
import About from '../components/About/About.jsx';

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`About ${config.siteTitle}`} />
        <About />
      </div>
    );
  }
}

export default AboutPage;
