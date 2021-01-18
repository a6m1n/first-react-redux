const FetchedPost = (props) => {
  return (
    <div className="col">
      <div>Fetched Posts</div>
      <button
        onClick={props.handleLoadPosts}
        className="btn btn-outline-success"
      >
        Load posts
      </button>
      {props.isLoadPosts && props.posts}
    </div>
  );
};

export default FetchedPost;
