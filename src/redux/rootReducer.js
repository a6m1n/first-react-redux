import { combineReducers } from "redux";
import { postsReducer } from "../components/postFrom/postsReducer.js";
import { fetchedPostsReducer } from "../components/fetchedPosts/fetchedPostReducer.js";
import { loaderReducer } from "../components/loader";

export const rootReducer = combineReducers({
  posts: postsReducer,
  fetchedPosts: fetchedPostsReducer,
  loaderReducer: loaderReducer,
});
