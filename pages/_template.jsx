import React from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import { config } from 'config';
import './react-md.scss';
import './_template.css';

export default class Template extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="container">
        <NavigationDrawer drawerTitle={config.siteTitle}>
          {children}
        </NavigationDrawer>
      </div>
    );
  }
}
