import axios, { AxiosError, AxiosInstance } from 'axios';
import { store } from '../store/index';
import { LoginResponse, ParamsLogin, UserAll } from '@/api_type/Login/login';
import { PramsRegister } from '@/api_type/Register/register';
import _ from 'lodash';

/** Setting timeout of axios */
const AXIOS_TIMEOUT: number = 10000;

/** API url */
const BASE_URL: string = import.meta.env.VITE_API_URL;

class AxiosClient {
  private axios: AxiosInstance;
  public exception: AxiosError | undefined;
  private config = {
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    },
  };

  constructor() {
    this.axios = axios.create({
      baseURL: BASE_URL,
      timeout: AXIOS_TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    this.axios.interceptors.request.use(
      async (config) => {
        const token = store.getState().user.token;

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const serverError = _.get(error, 'response.data', {});
        return Promise.reject(serverError);
      },
    );
  }

  apiLogin(params: ParamsLogin) {
    return this.axios.post<LoginResponse>('api/login', params);
  }

  apiGetUsers() {
    return this.axios.get<UserAll>('api/users', this.config);
  }

  apiUpdateUser(id: number, params: Object) {
    return this.axios.put(`api/update-user/${id}`, params, this.config);
  }

  apiDeleteUser(id: number) {
    return this.axios.delete(`api/delete-user/${id}`, this.config);
  }

  apiRegister(params: PramsRegister) {
    return this.axios.post('api/register', params);
  }

  apiGetProduct() {
    return this.axios.get('/products', this.config);
  }
}

export default new AxiosClient();
