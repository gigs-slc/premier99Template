import type {IAuthResponse} from 'types';
import {useMutation} from '@tanstack/react-query';
import {postRequest} from './apiRequest';

const loginEndpoint = '/auth/login';
const registerEndpoint = '/auth/register';
export const AuthApi = {
  useLoginMutation: () => {
    return useMutation({
      mutationFn: (data: {email: string; password: string}) =>
        postRequest<IAuthResponse>(loginEndpoint, data),
    });
  },

  useRegisterMutation: () => {
    return useMutation({
      mutationFn: (data: {email: string; password: string; type: string}) =>
        postRequest<IAuthResponse>(registerEndpoint, data),
    });
  },
};
