import { FETCH_POSTS, LOAD_POSTS } from "./types.js";

const initialState = {
  posts: [],
  isLoadPosts: false,
};

export const fetchedPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload };
    case LOAD_POSTS:
      return { ...state, isLoadPosts: true };
    default:
      return state;
  }
};
