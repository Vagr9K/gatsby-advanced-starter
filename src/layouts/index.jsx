import React from 'react';
import 'font-awesome/scss/font-awesome.scss';
import Navigation from '../components/Navigation/Navigation.jsx';
import config from '../../data/SiteConfig';
import './index.scss';

export default class MainLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = this.props.pathPrefix ? this.props.pathPrefix : '/';
    const currentPath = this.props.location.replace(pathPrefix, '');
    let title = '';
    if (currentPath === ('')) {
      title = 'Home';
    } else if (currentPath === ('tags/')) {
      title = 'Tags';
    } else if (currentPath === ('categories/')) {
      title = 'Categories';
    } else if (currentPath === ('about/')) {
      title = 'About';
    } else if (currentPath.includes('posts')) {
      title = 'Article';
    } else if (currentPath.includes('tags/')) {
      const tag = currentPath.replace('tags/', '').replace('/', '').replace('-', ' ');
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.includes('categories/')) {
      const category = currentPath.replace('categories/', '').replace('/', '').replace('-', ' ');
      title = `${capitalize(category)}`;
    }
    return title;
  }
  render() {
    const { children } = this.props;
    return (
      <Navigation SiteConfig={config} LocalTitle={this.getLocalTitle()}>
        <div>
          {children}
        </div>
      </Navigation>

    );
  }
}

// NOTE: This will be moved under src/layouts/ once Gatsby supports running queries from there.

