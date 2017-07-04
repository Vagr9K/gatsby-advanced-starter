import React from 'react';
import 'font-awesome/scss/font-awesome.scss';
import Navigation from '../Navigation/Navigation.jsx';
import './index.scss';

export default class MainLayout extends React.Component {

  getLocalTitle() {
    const currentPath = this.props.location;
    let title = '';
    if (currentPath === ('/')) {
      title = 'Home';
    } else if (currentPath === ('/tags/')) {
      title = 'Tags';
    } else if (currentPath === ('/about/')) {
      title = 'About';
    } else {
      title = 'Article';
    }
    return title;
  }
  render() {
    const { SiteConfig, children } = this.props;
    console.log('MainLayout');
    console.log(this.props);
    console.log(children);
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

// TODO: Removal of prefixLink breaks link checks
