import React, { Component } from 'react';

class PostItem extends Component {
  render() {
    return (
      <li className="post-item" onClick={ this.props.handleClick } >{this.props.title}</li>
    );
  }
}

export default PostItem;
