import axios, { AxiosInstance } from 'axios';

/** Setting timeout of axios */
const AXIOS_TIMEOUT: number = 10000;

/** API url */
const BASE_URL: string = import.meta.env.VITE_API_URL;

console.log('====================================');
console.log(BASE_URL);
console.log('====================================');

class AxiosClient {
  private axios: AxiosInstance;
  private config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  constructor() {
    this.axios = axios.create({
      baseURL: BASE_URL,
      timeout: AXIOS_TIMEOUT,
      headers: this.config.headers,
    });
  }

  apiLogin(params: object) {
    return this.axios.post('/users/login', params);
  }

  apiRegister(params: object) {
    return this.axios.post('/users/register', params);
  }
}

export default new AxiosClient();
