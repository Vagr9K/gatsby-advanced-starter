import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';
import './UserLinks.scss';

class UserLinks extends Component {

  render() {
    const { SiteConfig } = this.props;
    return (
      <div className="user-links">
        <Button
          className="button"
          icon
          iconClassName="fa fa-link"
          href={SiteConfig.userWebsite}
        />
        <Button
          className="button"
          icon
          iconClassName="fa fa-github"
          href={SiteConfig.userGitHub}
        />
        <Button
          className="button"
          icon
          iconClassName="fa fa-twitter"
          href={SiteConfig.userTwitter}
        />
        <Button
          className="button"
          icon
          iconClassName="fa fa-facebook"
          href={SiteConfig.userFacebook}
        />
        <Button
          className="button"
          icon
          iconClassName="fa fa-instagram"
          href={SiteConfig.userInstagram}
        />
        <Button
          className="button"
          icon
          iconClassName="fa fa-envelope"
          href={SiteConfig.userEmail}
        />
      </div>
    );
  }
}

export default UserLinks;
