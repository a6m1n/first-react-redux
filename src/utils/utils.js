import { JSON_API_DOMAIN, JSON_API_QUERY_PARAM } from "./../api";

export const generateUrl = (domain=JSON_API_DOMAIN, path="", queryParam=JSON_API_QUERY_PARAM) => {
  // example path: "/posts"
  // example domain: "https://jsonplaceholder.typicode.com"
  // example queryParam: {}

  let url = new URL(domain + path);
  Object.keys(queryParam).forEach(key => url.searchParams.append(key, queryParam[key]));
  return url;
}