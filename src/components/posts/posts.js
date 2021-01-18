import React from "react";
import Post from "./post.js";

const Posts = (props) => {
  let postList;
  if (props.posts.length) {
    postList = props.posts.slice().map((post) => (
      <Post post={post} key={post.id} postHeader={"Simple posts"} />
    ));
  } else {
    postList = <div>Not any post</div>
  }

  return (
    <div className="col">
      <span>Posts</span>
      {postList}
    </div>
  );
};

export default Posts;
