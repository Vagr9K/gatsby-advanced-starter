import React from 'react';
import './_template.css';

export default class Template extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="container">
        {children}
      </div>
    );
  }
}
