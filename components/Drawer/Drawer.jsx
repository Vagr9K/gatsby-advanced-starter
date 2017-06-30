import React, { Component } from 'react';
import UserNavInfo from '../UserNavInfo/UserNavInfo.jsx';
import './Drawer.scss';

class Drawer extends Component {
  render() {
    const { SiteConfig } = this.props;
    return (
      <div className="drawer-children md-list--drawer">
        <UserNavInfo SiteConfig={SiteConfig} />
      </div>
    );
  }
}

export default Drawer;
