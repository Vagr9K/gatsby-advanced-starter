import React, { Component } from 'react';
import UserLinks from '../UserLinks/UserLinks.jsx';
import './ToolbarActions.scss';

class Toolbar extends Component {
  render() {
    const { SiteConfig } = this.props;
    return (
      <div className="toolbar-children">
        <UserLinks SiteConfig={SiteConfig} />
      </div>
    );
  }
}

export default Toolbar;
