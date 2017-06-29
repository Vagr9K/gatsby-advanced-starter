import React, { Component } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Chip from 'react-md/lib/Chips';
import './PostTags.scss';

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div>
        {
            tags && tags.map(tag =>
              <Link key={tag} style={{ textDecoration: 'none' }} to={prefixLink('/tags/')}>
                <Chip label={tag} className="post-preview-tags" />
              </Link>)
        }
      </div>

    );
  }
}

export default PostTags;
