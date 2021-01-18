import { combineReducers } from "redux";
import { postsReducer } from '../components/postFrom/postsReducer';
import { fetchedPostsReducer } from '../components/fetchedPosts/fetchedPostReducer';


export const rootReducer = combineReducers({
  posts: postsReducer,
  fetchedPosts: fetchedPostsReducer
});
