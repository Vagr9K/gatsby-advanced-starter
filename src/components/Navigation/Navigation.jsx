import React, { Component } from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import ToolbarActions from '../ToolbarActions/ToolbarActions.jsx';
import Footer from '../Footer/Footer.jsx';
import NavList from './NavList.jsx';
import './Navigation.scss';

class Navigation extends Component {
  render() {
    const { children, SiteConfig, LocalTitle } = this.props;

    return (
      <NavigationDrawer
        drawerTitle={SiteConfig.siteTitle}
        toolbarTitle={LocalTitle}
        contentClassName="main-content"
        navItems={NavList}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        toolbarActions={<ToolbarActions SiteConfig={SiteConfig} />}
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
