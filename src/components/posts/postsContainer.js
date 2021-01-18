import { connect } from "react-redux";
import Posts from "./posts.js";

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

const PostsContainer = connect(mapStateToProps, null)(Posts);

export default PostsContainer;
