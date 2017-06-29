import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';
import PostPreview from '../components/PostPreview/PostPreview.jsx';

class Index extends React.Component {
  getPostList() {
    const postList = [];
    const postPath = '/posts/';
    this.props.route.pages.forEach((page) => {
      if (page.path.includes(postPath)) {
        postList.push({
          path: page.path,
          tags: page.data.tags,
          cover: page.data.cover,
          title: page.data.title,
          date: page.data.date,
        });
      }
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div className="index-container md-grid">
        <Helmet title={config.siteTitle} />
        {
          postList.map(post => (<PostPreview postInfo={post} />))
        }
      </div>
    );
  }
}

export default Index;
