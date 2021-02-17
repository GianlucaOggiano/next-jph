import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com',
  responseType: 'json',
});

export default instance;
