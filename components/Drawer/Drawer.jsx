import React, { Component } from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import IconSeparator from 'react-md/lib/Helpers/IconSeparator';
import UserLinks from '../UserLinks/UserLinks.jsx';
import './Drawer.scss';

class Drawer extends Component {
  render() {
    const { SiteConfig } = this.props;
    return (
      <div className="drawer md-list--drawer">
        <section className="user-info">
          <img src={SiteConfig.userAvatar} alt="User avatar." className="avatar" />
          <h1>{SiteConfig.userName}</h1>
          <IconSeparator label={SiteConfig.userLocation} iconBefore>
            <FontIcon iconClassName="fa fa-map-marker" />
          </IconSeparator>
          <h6 className="md-font-light">{SiteConfig.userDescription}</h6>
          <UserLinks SiteConfig={SiteConfig} />
        </section>
      </div>
    );
  }
}

export default Drawer;
