import React from "react";

const Post = ({ post, postHeader }) => {
  return (
    <div className="card mt-3">
      <h5 className="card-header">{postHeader}</h5>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <a href="#openPost" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Post;
