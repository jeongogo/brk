import client from './client';

export const getPosts = () =>
  client.get('https://jsonplaceholder.typicode.com/posts');

export const getPostById = (id) =>
  client.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getComments = (id) =>
  client.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

export const wirtePost = (newPost) =>
  client.post('https://jsonplaceholder.typicode.com/posts', newPost);
