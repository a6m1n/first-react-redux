import React from "react";
import { connect } from "react-redux";
import Post from "../posts/post.js";
import FetchedPost from "./fetchedPost.js";
import { fetchPosts } from "./actions.js";

class fetchedPostConatiner extends React.Component {
  getPosts = () => {
    const posts = this.props.posts.slice();
    return posts.map((post) => (
      <Post post={post} key={post.id} postHeader={"Fetched posts"} />
    ));
  };

  handleLoadPosts = () => {
    this.props.fetchPosts();
  };

  render() {
    const posts = this.getPosts();
    return (
      <FetchedPost
        posts={posts}
        handleLoadPosts={this.handleLoadPosts}
        isLoadedPosts={this.props.isLoadedPosts}
        showLoader={this.props.showLoader}
      />
    );
  }
}

const mapDispatchToProps = {
  fetchPosts,
};

const mapStateToProps = (state) => {
  return {
    posts: state.fetchedPosts.posts,
    isLoadedPosts: state.fetchedPosts.isLoadedPosts,
    showLoader: state.loaderReducer.showLoader,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(fetchedPostConatiner);
