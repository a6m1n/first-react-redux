import PostForm from "./components/postFrom/postFromContainer.js";
import Posts from "./components/posts/postsContainer.js";
import FetchedPosts from "./components/fetchedPosts/fetchedPostConatiner.js";

function App() {
  return (
    <div className="container pt-3">
      <PostForm />
      <div className="row">
        <Posts />
        <FetchedPosts />
      </div>
    </div>
  );
}

export default App;
