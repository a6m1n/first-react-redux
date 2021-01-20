import { hideLoader, showLoader } from "../loader/actions.js";
import { FETCH_POSTS, LOADED_POSTS } from "./types.js";
import { getJsonPosts } from "../../api";

function loadPosts(json) {
  return {
    type: FETCH_POSTS,
    payload: json,
  };
}

function loadedPosts() {
  return {
    type: LOADED_POSTS,
  };
}

export function fetchPosts(queryParam) {
  // TODO: create fetch and axios variable; create pagination; check all data from jsonplaceholder (users, comments, albums);
  // https://github.com/typicode/json-server help
  return async (dispatch) => {
    dispatch(showLoader());
    setTimeout(async () => {
      try {
        const { json, response } = await getJsonPosts("/posts", queryParam);
        if (response.ok) {
          dispatch(loadPosts(json));
          dispatch(loadedPosts());
        }
      } catch (error) {
        console.log("Error when loading posts");
      } finally {
        dispatch(hideLoader());
      }
    }, 1000);
  };
}
