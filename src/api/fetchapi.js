import {
  JSON_API_DOMAIN,
  JSON_API_QUERY_PARAM,
  fetchRequestGetQueryOptions,
} from "./const.js";

import { generateUrl } from "../utils";

export const getJsonPosts = async (
  path = "/posts",
  queryParam = JSON_API_QUERY_PARAM,
  domain = JSON_API_DOMAIN
) => {
  const url = generateUrl(domain, path, queryParam);
  return await sendGetRequest(url, true, {});
};

const sendGetRequest = async (
  url,
  toJson = false,
  queryOptions = fetchRequestGetQueryOptions
) => {
  const response = await fetch(url, queryOptions);
  const reponseData = {};

  if (toJson && response.ok) {
    reponseData.json = await response.json();
  }
  reponseData.response = response;
  return reponseData;
};
