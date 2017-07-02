import React, { Component } from 'react';
import About from '../components/About/About.jsx';

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        {/* TODO: Set title from config.*/}
        <About />
      </div>
    );
  }
}

export default AboutPage;
