import { axiosInstance } from '@libraries/axios/configure';
import type { AxiosRequestConfig } from 'axios';

export const post = async <T>(url: string, data: unknown, options?: AxiosRequestConfig) => {
  const response = await axiosInstance<T>({
    method: 'POST',
    url,
    data,
    ...options
  });

  return response.data;
};

export const get = async <T>(url: string, options?: AxiosRequestConfig) => {
  const response = await axiosInstance<T>({
    method: 'GET',
    url,
    ...options
  });

  return response.data;
};
