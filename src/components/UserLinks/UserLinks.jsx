import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';
import './UserLinks.scss';

class UserLinks extends Component {

  render() {
    const { userLinks } = this.props.SiteConfig;
    if (!userLinks) {
      return null;
    }
    return (
      <div className="user-links">
        {
          userLinks.map(link =>
          (
            <Button
              icon
              secondary
              key={link[0]}
              iconClassName={link[2]}
              href={link[1]}
            />
          ),

        )
        }
      </div>
    );
  }
}

export default UserLinks;
