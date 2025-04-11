import { environment } from '../constants/environment';
import { ICustomerInfo } from '../types/customerInfo';
import axiosInstance from '../utils/axiosUtil';
import { getLocalStorage } from '../utils/storage';

export const getOrders = async (
  page: number,
  pageSize: number,
  search?: string,
  category?: string,
  sortBy?: string,
  sortOrder?: string,
) => {
  let url = `${environment.API_URL}/orders?page=${page}&pageSize=${pageSize}`;

  if (!!search) url += `&search=${search}`;
  if (!!category) url += `&category=${category}`;
  if (!!sortBy) url += `&sortBy=${sortBy}`;
  if (!!sortOrder) url += `&sortOrder=${sortOrder}`;

  const result = await axiosInstance.get(url, {
    headers: {
      Authorization: `Bearer ${getLocalStorage('auth')}`,
    },
  });

  return result;
};

export const getOrderDetail = async (id: string) => {
  const url = `${environment.API_URL}/orders/${id}`;
  const result = await axiosInstance.get(url, {
    headers: {
      Authorization: `Bearer ${getLocalStorage('auth')}`,
    },
  });
  return result;
};

export const createOrder = async (payload: ICustomerInfo) => {
  const url = `${environment.API_URL}/orders`;
  const result = await axiosInstance.post(url, payload, {
    headers: {
      Authorization: `Bearer ${getLocalStorage('auth')}`,
    },
  });

  return result;
};

export const updateOrder = async (id: string, payload: { status: string }) => {
  const url = `${environment.API_URL}/orders/${id}`;
  const result = await axiosInstance.put(url, payload, {
    headers: {
      Authorization: `Bearer ${getLocalStorage('auth')}`,
    },
  });

  return result;
};

export const deleteOrder = async (id: string) => {
  const url = `${environment.API_URL}/orders/${id}`;
  const result = await axiosInstance.delete(url, {
    headers: {
      Authorization: `Bearer ${getLocalStorage('auth')}`,
    },
  });

  return result;
};
