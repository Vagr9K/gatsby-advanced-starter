import React from 'react';
import { config } from 'config';
import 'font-awesome/scss/font-awesome.scss';
import { prefixLink } from 'gatsby-helpers';
import Navigation from '../components/Navigation/Navigation.jsx';
import './_template.scss';

export default class Template extends React.Component {

  getLocalTitle() {
    const currentPath = this.props.location.pathname;
    let title = '';
    if (currentPath === prefixLink('/')) {
      title = 'Home';
    } else if (currentPath === prefixLink('/tags/')) {
      title = 'Tags';
    } else if (currentPath === prefixLink('/about/')) {
      title = 'About';
    } else {
      title = 'Article';
    }
    return title;
  }
  render() {
    const { children } = this.props;
    return (
      <Navigation SiteConfig={config} LocalTitle={this.getLocalTitle()}>
        {children}
      </Navigation>
    );
  }
}
