import React from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import IconSeparator from 'react-md/lib/Helpers/IconSeparator';
import { config } from 'config';
import 'font-awesome/scss/font-awesome.scss';
import './react-md.scss';
import './_template.scss';
import './toolbar.scss';
import './drawer.scss';

export default class Template extends React.Component {
  static renderToolbar() {
    return (
      <div className="toolbar" />
    );
  }

  static renderDrawer() {
    return (
      <div className="drawer">
        <section className="user-info">
          <img src={config.userAvatar} alt="User avatar." className="avatar" />
          <h1>{config.userName}</h1>
          <IconSeparator label={config.userLocation} iconBefore>
            <FontIcon iconClassName="fa fa-map-marker" />
          </IconSeparator>
          <h6 className="md-font-light">{config.userDescription}</h6>
        </section>
        <section className="user-links">
          <List>
            <ListItem
              component="a"
              href={config.userWebsite}
              primaryText="My Website"
              leftIcon={<FontIcon forceSize iconClassName="fa fa-link" />}
            />
            <ListItem
              component="a"
              href={config.userGitHub}
              primaryText="GitHub"
              leftIcon={<FontIcon forceSize iconClassName="fa fa-github" />}
            />
            <ListItem
              component="a"
              href={config.userTwitter}
              primaryText="Twitter"
              leftIcon={<FontIcon forceSize iconClassName="fa fa-twitter" />}
            />
            <ListItem
              component="a"
              href={config.userFacebook}
              primaryText="Facebook"
              leftIcon={<FontIcon forceSize iconClassName="fa fa-facebook" />}
            />
            <ListItem
              component="a"
              href={config.userInstagram}
              primaryText="Instagram"
              leftIcon={<FontIcon forceSize iconClassName="fa fa-instagram" />}
            />
            <ListItem
              component="a"
              href={config.userEmail}
              primaryText="E-Mail"
              leftIcon={<FontIcon forceSize iconClassName="fa fa-envelope" />}
            />
          </List>

        </section>
      </div>
    );
  }
  render() {
    const { children } = this.props;
    return (
      <div className="container">
        <NavigationDrawer
          drawerTitle={config.siteTitle}
          toolbarActions={Template.renderToolbar()}
          drawerChildren={Template.renderDrawer()}
        >
          {children}
        </NavigationDrawer>
      </div>
    );
  }
}
