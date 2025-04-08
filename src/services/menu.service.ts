import { environment } from '../constants/environment';
import axiosInstance from '../utils/axios';

export const getMenus = async (
  page: number,
  pageSize: number,
  search?: string,
  category?: string,
  sortBy?: string,
  sortOrder?: string,
) => {
  let url = `${environment.API_URL}/menu?page=${page}&pageSize=${pageSize}`;

  if (!!search) url += `&search=${search}`;
  if (!!category) url += `&category=${category}`;
  if (!!sortBy) url += `&sortBy=${sortBy}`;
  if (!!sortOrder) url += `&sortOrder=${sortOrder}`;

  const result = await axiosInstance.get(url);

  return result;
};

export const getMenuDetail = async (id: string) => {
  const url = `${environment.API_URL}/menu/${id}`;
  const result = await axiosInstance.get(url);
  return result;
};
