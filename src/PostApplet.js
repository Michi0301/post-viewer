import React, { Component } from 'react';
import './PostApplet.css';
import PostItem from './PostItem'
import PostContent from './PostContent'

class PostApplet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPost: this.props.posts[0]
    }
  }

  buildPostItems() {
    return (
      this.props.posts.map((post, index) => {
        return <PostItem title={post.title} handleClick={this.handleItemClick.bind(this, post)} key={index} />
      })    
    );
  }

  handleItemClick(post) {
    this.setState({
      currentPost: post
    });
  }

  render() {
    return (
      <div className="App">
        <ul className="post-list">
          { this.buildPostItems() }
        </ul>
        <PostContent content={this.state.currentPost.content} />
      </div>
    );
  }
}

export default PostApplet;
