# Вопросы

`1. Какая правильная структура папок по styleGuide react?
  Допустим у меня есть сущности:
-- Форма поста
-- Посты обычные
-- Посты которые я получаю с API.
Как правильно реализовать струтуру папок?

- components \
  -- posts \
  ---post.js
  ---postContainer.js
  ---posts.js
  ---postsContainer.js
  --fetchPosts \
  ---fetchPosts.js
  ---fetchPostsContainer.js
  --postFrom \
  ---postFrom.js
  ---PostFromContainer.js

  или может положить папки fetchPosts и postFrom в папку post? И праввильно ли я понял принцип умных и глупых компонентов?
`

1.
  // TODO: create fetch and axios variable; create pagination; check all data from jsonplaceholder (users, comments, albums);
  // https://github.com/typicode/json-server help
2.
 // create react router;
3.
 // create users data; albums photo; add loaders; add query params to request;
 