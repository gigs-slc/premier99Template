import apiClient from './client';
import {getItem} from '../Helpers';

export const methods = ['get', 'post', 'patch', 'put', 'delete'] as const;
export type TMethods = (typeof methods)[number];
const getToken = async () => {
  try {
    return await getItem('token');
  } catch (error) {
    console.error(`Error in getToken ${error}`);
  }
};

const Headers = async () => {
  const authToken = await getToken();
  return {
    Authorization: `Bearer ${authToken}`,
  };
};

const makeRequest = async <T>(
  method: TMethods,
  endpoint: string,
  data = null,
) => {
  try {
    const headers = await Headers();
    const response = await apiClient[method](endpoint, data, {
      headers,
    });

    return response.ok
      ? Promise.resolve(response as unknown as T)
      : Promise.reject(response);
  } catch (exception) {
    return Promise.reject(exception);
  }
};

export const getRequest = async <T>(
  endpoint: string,
  params: any,
): Promise<T> => makeRequest<T>('get', endpoint, params);

export const postRequest = async <T>(endpoint: string, data: any): Promise<T> =>
  makeRequest<T>('post', endpoint, data);

export const patchRequest = async <T>(
  endpoint: string,
  data: any,
): Promise<T> => makeRequest<T>('patch', endpoint, data);

export const putRequest = async <T>(endpoint: string, data: any): Promise<T> =>
  makeRequest<T>('put', endpoint, data);

export const deleteRequest = async <T>(
  endpoint: string,
  data: any,
): Promise<T> => makeRequest<T>('delete', endpoint, data);
