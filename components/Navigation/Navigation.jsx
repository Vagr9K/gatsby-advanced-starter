import React, { Component } from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import Toolbar from '../Toolbar/Toolbar.jsx';
import Drawer from '../Drawer/Drawer.jsx';
import Footer from '../Footer/Footer.jsx';
import './Navigation.scss';

class Navigation extends Component {
  render() {
    const { children, SiteConfig, LocalTitle } = this.props;
    return (
      <NavigationDrawer
        drawerTitle={SiteConfig.siteTitle}
        toolbarTitle={LocalTitle}
        contentClassName="main-content"
        toolbarChildren={<Toolbar />}
        drawerChildren={<Drawer SiteConfig={SiteConfig} />}
      >
        <div className="main-container">
          {children}
        </div>
        <Footer SiteConfig={SiteConfig} />
      </NavigationDrawer>
    );
  }
}

export default Navigation;
