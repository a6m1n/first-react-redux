const getPosts = async (url, limit) => {
  const domain = "https://jsonplaceholder.typicode.com";
  const response = await fetch(domain + url);
  const json = await response.json();
  return json;
};
