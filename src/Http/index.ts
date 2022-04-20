import axios from 'axios';

const headers = {
  Accept: 'application/json',
};

export const $host = axios.create({
  // baseURL: 'http://185.48.229.84:8080',
  baseURL: '',
  headers,
  withCredentials: true,
});

$host.interceptors.response.use(
  (config: any) => {
    return config;
  },
  async (error: any) => {
    if (error.response.status === 401 || error.response.status === 403) {
      localStorage.removeItem('isAuth');
      window.location.href = '/login';
    }
    throw error;
  },
);
