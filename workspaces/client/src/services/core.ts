import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const config: AxiosRequestConfig = {
  baseURL: '/api',
};

const coreInstance = axios.create(config);

export default coreInstance;
