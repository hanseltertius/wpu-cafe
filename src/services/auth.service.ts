import { environment } from '../constants/environment';
import { ILogin } from '../types/auth';
import axiosInstance from '../utils/axios';

export const login = async (payload: ILogin) => {
  const result = await axiosInstance.post(
    `${environment.API_URL}/auth/login`,
    payload,
  );

  return result;
};
