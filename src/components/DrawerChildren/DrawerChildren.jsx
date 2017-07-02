import React, { Component } from 'react';
import UserNavInfo from '../UserNavInfo/UserNavInfo.jsx';
import './DrawerChildren.scss';

class DrawerChildren extends Component {
  render() {
    const { SiteConfig } = this.props;
    return (
      <div className="drawer-children md-list--drawer">
        <UserNavInfo SiteConfig={SiteConfig} />
      </div>
    );
  }
}

export default DrawerChildren;
