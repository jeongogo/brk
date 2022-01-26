import client from './client';

export const login = (user) =>
  client.post('https://jsonplaceholder.typicode.com/users', user);

export const register = (newUser) =>
  client.post('https://jsonplaceholder.typicode.com/users', newUser);
