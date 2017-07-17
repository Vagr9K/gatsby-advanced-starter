import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';
import './UserLinks.scss';

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link =>
      (<Button
        icon={!labeled}
        flat={labeled}
        secondary
        key={link.label}
        iconClassName={link.iconClassName}
        href={link.url}
      >
        {labeled ? link.label : ''}
      </Button>));
  }
  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return (
      <div className="user-links">
        {
          this.getLinkElements()
        }
      </div>
    );
  }
}

export default UserLinks;
