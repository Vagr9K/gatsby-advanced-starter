import React, { Component } from 'react';
import UserLinks from '../UserLinks/UserLinks.jsx';
import './ToolbarActions.scss';

class Toolbar extends Component {
  render() {
    const { config } = this.props;
    return (
      <div className="toolbar-actions" >
        <UserLinks config={config} />
      </div>
    );
  }
}

export default Toolbar;
