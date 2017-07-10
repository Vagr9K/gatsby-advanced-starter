import React, { Component } from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import Card from 'react-md/lib/Cards';
import config from '../../../data/SiteConfig';

class Disqus extends Component {
  render() {
    const { post, onDisqusComment } = this.props;
    if (!config.disqusShortname) {
      return null;
    }
    return (
      <Card className="md-grid md-cell md-cell--12">
        <ReactDisqusComments
          shortname={config.disqusShortname}
          identifier={post.id}
          title={post.title}
          url={post.url}
          category_id={post.category_id}
          onNewComment={onDisqusComment}
        />
      </Card>
    );
  }
}

export default Disqus;
