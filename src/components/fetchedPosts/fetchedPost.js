import { GreenLoader } from "../loader";


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
      {props.showLoader ? <div className="mt-3"><GreenLoader /></div> : null}
      {props.isLoadedPosts && props.posts}
    </div>
  );
};

export default FetchedPost;
