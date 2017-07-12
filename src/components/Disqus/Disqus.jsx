import React, { Component } from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import Avatar from 'react-md/lib/Avatars';
import FontIcon from 'react-md/lib/FontIcons';
import config from '../../../data/SiteConfig';

class Disqus extends Component {
  render() {
    const { post, onDisqusComment, expanded } = this.props;
    if (!config.disqusShortname) {
      return null;
    }
    return (
      <Card className="md-grid md-cell md-cell--12">
        <CardTitle
          title="Comments"
          avatar={<Avatar icon={<FontIcon>comment</FontIcon>} />}
          expander={!expanded}
        />
        <CardText expandable={!expanded}>
          <ReactDisqusComments
            shortname={config.disqusShortname}
            identifier={post.id}
            title={post.title}
            url={post.url}
            category_id={post.category_id}
            onNewComment={onDisqusComment}
          />
        </CardText>
      </Card>
    );
  }
}

export default Disqus;
