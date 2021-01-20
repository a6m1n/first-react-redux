import { CREATE_POST } from "./types.js";

const initialState = {
  posts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {...state, posts: state.posts.concat(action.payload)}
    default: return state;
  }
};
