
export const JSON_API_DOMAIN = "https://jsonplaceholder.typicode.com";

// more info in docs https://github.com/typicode/json-server
export const JSON_API_QUERY_PARAM = {
  _limit: 10,
};
export const fetchRequestGetQueryOptions = {
  method: "GET",
  mode: "cors",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
};