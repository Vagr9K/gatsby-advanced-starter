import React from 'react';
import 'font-awesome/scss/font-awesome.scss';
import Navigation from '../Navigation/Navigation.jsx';
import './index.scss';

export default class MainLayout extends React.Component {

  getLocalTitle() {
    const currentPath = this.props.location;
    const prefixPath = this.props.SiteConfig.prefixPath;
    let title = '';
    if (currentPath === (`${prefixPath}/`)) {
      title = 'Home';
    } else if (currentPath === (`${prefixPath}/tags/`)) {
      title = 'Tags';
    } else if (currentPath === (`${prefixPath}/about/`)) {
      title = 'About';
    } else {
      title = 'Article';
    }
    return title;
  }
  render() {
    const { SiteConfig, children } = this.props;
    return (
      <Navigation SiteConfig={SiteConfig} LocalTitle={this.getLocalTitle()}>
        <div>
          {children}
        </div>
      </Navigation>

    );
  }
}

// NOTE: This will be moved under src/layouts/ once Gatsby supports running queries from there.

