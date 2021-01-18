import { FETCH_POSTS, LOAD_POSTS } from "./types.js";

export function fetchPosts(limit=1) {
  // TODO: create fetch and axios variable; create pagination; check all data from jsonplaceholder (users, comments, albums);
  // https://github.com/typicode/json-server help
  return async (dispatch) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit="+limit
    );
    const json = await response.json();
    dispatch({
      type: FETCH_POSTS,
      payload: json,
    });
    dispatch({
      type: LOAD_POSTS,
    });
  };
}
