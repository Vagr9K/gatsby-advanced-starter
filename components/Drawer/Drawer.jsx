import React, { Component } from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import IconSeparator from 'react-md/lib/Helpers/IconSeparator';
import { List, ListItem } from 'react-md/lib/Lists';
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

          <List>
            <ListItem
              component="a"
              href={SiteConfig.userWebsite}
              primaryText="My Website"
              leftIcon={<FontIcon forceSize iconClassName="fa fa-link" />}
            />
            <ListItem
              component="a"
              href={SiteConfig.userGitHub}
              primaryText="GitHub"
              leftIcon={<FontIcon forceSize iconClassName="fa fa-github" />}
            />
            <ListItem
              component="a"
              href={SiteConfig.userTwitter}
              primaryText="Twitter"
              leftIcon={<FontIcon forceSize iconClassName="fa fa-twitter" />}
            />
            <ListItem
              component="a"
              href={SiteConfig.userFacebook}
              primaryText="Facebook"
              leftIcon={<FontIcon forceSize iconClassName="fa fa-facebook" />}
            />
            <ListItem
              component="a"
              href={SiteConfig.userInstagram}
              primaryText="Instagram"
              leftIcon={<FontIcon forceSize iconClassName="fa fa-instagram" />}
            />
            <ListItem
              component="a"
              href={`mailto: ${SiteConfig.userEmail}`}
              primaryText="E-Mail"
              leftIcon={<FontIcon forceSize iconClassName="fa fa-envelope" />}
            />
          </List>
        </section>
      </div>
    );
  }
}

export default Drawer;
