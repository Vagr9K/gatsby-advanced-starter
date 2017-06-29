import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import Card from 'react-md/lib/Cards';
import './atom-one-dark.css';
import './md.scss';

export default class MarkdownWrapper extends React.Component {
  render() {
    const post = this.props.route.page.data;
    return (
      <div className="md-grid post-container">

        <Helmet
          title={`${post.title} | ${config.siteTitle}`}
        />
        <Card className="md-grid md-cell md-cell--12 post">
          <div className="markdown md-typography-text-container post-body">
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          </div>
        </Card>
      </div>
    );
  }
}
