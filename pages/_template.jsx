import React from 'react';
import { config } from 'config';
import 'font-awesome/scss/font-awesome.scss';
import Navigation from '../components/Navigation/Navigation.jsx';
import './_template.scss';

export default class Template extends React.Component {

  getLocalTitle() {
    const currentPath = this.props.location.pathname;
    let title = '';
    if (currentPath === '/') {
      title = 'Home';
    } else if (currentPath === '/tags/') {
      title = 'Tags';
    } else if (currentPath === '/about/') {
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
