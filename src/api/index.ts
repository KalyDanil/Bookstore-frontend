import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:4000/',
});

api.interceptors.request.use(
  (config) => {
    config.headers = {
      // Authorization: `token ${localStorage.getItem('token')}`,
      Authorization: 'asd',
    };
    return config;
  },
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
);
