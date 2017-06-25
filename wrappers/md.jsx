import React from 'react';

export default class MarkdownWrapper extends React.Component {
  render() {
    const post = this.props.route.page.data;
    return (
      <div className="markdown">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    );
  }
}
