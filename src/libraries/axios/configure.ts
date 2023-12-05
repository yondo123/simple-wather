import axios from 'axios';
import { ApplicationError } from '@shared/constants/errorMessage';
import { LOCALHOST } from '@shared/constants/api';

export const axiosInstance = axios.create({
  baseURL: LOCALHOST,
  timeout: 3000
});

axiosInstance.interceptors.request.use(
  config => config,
  error => error
);

axiosInstance.interceptors.response.use(
  config => config,
  error => {
    if (error.response) {
      const { status, data } = error.response;
      if (data && status) {
        return Promise.reject(data.message ?? ApplicationError.UNKNOWN);
      }
      if (status) {
        switch (status) {
          case 400:
            return Promise.reject(ApplicationError.BAD_REQUEST);
          case 401:
            return Promise.reject(ApplicationError.UNAUTHORIZED);
          case 404:
            return Promise.reject(ApplicationError.NOTFOUND);
          case 429:
            return Promise.reject(ApplicationError.EXCEEDED);
          default:
            return Promise.reject(ApplicationError.SERVER);
        }
      }
    }
    return Promise.reject(error ?? ApplicationError.UNKNOWN);
  }
);
