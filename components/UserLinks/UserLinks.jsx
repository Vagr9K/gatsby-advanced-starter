import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';
import './UserLinks.scss';

class UserLinks extends Component {

  render() {
    const { userLinks } = this.props.SiteConfig;
    return (
      <div className="user-links">
        {
          userLinks && userLinks.map(link =>
          (
            <Button
              icon
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
