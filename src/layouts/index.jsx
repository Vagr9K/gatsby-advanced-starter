import React from 'react';
import 'font-awesome/scss/font-awesome.scss';
// import Navigation from '../components/Navigation/Navigation.jsx';
import './index.scss';

export default class MainLayout extends React.Component {

  getLocalTitle() {
    const currentPath = this.props.location.pathname;
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
    const { children } = this.props;
    console.log(this);
    // const SiteConfig = this.props.data.site.siteMetadata;

    return (
      // <Navigation SiteConfig={SiteConfig} LocalTitle={this.getLocalTitle()}>
      <div>
        {children()}
      </div>
      /* </Navigation>*/

    );
  }
}

// TODO seems like components/layouts don't support GraphQL

// TODO: Removal of prefixLink breaks link checks
