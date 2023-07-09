import axios from 'axios';

/** Setting timeout of axios */
const AXIOS_TIMEOUT = 10000;

/** API url */
const BASE_URL = import.meta.env.VITE_API_URL;

class AxiosClient {
  constructor() {
    this.axios = axios.create({
      baseURL: BASE_URL,
      timeout: AXIOS_TIMEOUT
    });

    this.config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    };
  }

  apiLogin(params) {
    return this.axios.post('/users/login', params);
  }

  apiRegister(params) {
    return this.axios.post('/users/register', params);
  }
}

export default new AxiosClient();
