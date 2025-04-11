import { environment } from '../constants/environment';
import { ILogin } from '../types/auth';
import axiosInstance from '../utils/axiosUtil';

export const login = async (payload: ILogin) => {
  const url = `${environment.API_URL}/auth/login`;
  const result = await axiosInstance.post(url, payload);

  return result;
};
