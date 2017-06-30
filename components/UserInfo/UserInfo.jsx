import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import Avatar from 'react-md/lib/Avatars';
import FontIcon from 'react-md/lib/FontIcons';
import IconSeparator from 'react-md/lib/Helpers/IconSeparator';
import UserLinks from '../UserLinks/UserLinks.jsx';
import './UserInfo.scss';


class UserInfo extends Component {
  render() {
    const { SiteConfig } = this.props;
    return (
      <Card className="md-grid md-cell md-cell--12 user-info">
        <CardTitle
          expander
          avatar={<Avatar src={SiteConfig.userAvatar} role="presentation" />}
          title={SiteConfig.userName}
          subtitle="Author"
        />
        <CardText expandable>
          <IconSeparator label={SiteConfig.userLocation} iconBefore>
            <FontIcon iconClassName="fa fa-map-marker" />
          </IconSeparator>
          <p>{SiteConfig.userDescription}</p>
          <UserLinks SiteConfig={SiteConfig} />
        </CardText>
      </Card>
    );
  }
}

export default UserInfo;
