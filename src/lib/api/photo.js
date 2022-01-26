import client from './client';

export const getPhotos = (page) =>
  client.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}`);

export const getPhotoById = (id) =>
  client.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
