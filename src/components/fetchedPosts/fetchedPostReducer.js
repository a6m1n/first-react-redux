import { FETCH_POSTS, LOADED_POSTS } from "./types.js";

const initialState = {
  posts: [],
  isLoadPosts: false,
};

export const fetchedPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload };
    case LOADED_POSTS:
      return { ...state, isLoadedPosts: true };
    default:
      return state;
  }
};
