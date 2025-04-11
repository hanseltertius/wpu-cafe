import { environment } from '../constants/environment';
import { IReview } from '../types/review';
import axiosInstance from '../utils/axiosUtil';

export const getReviews = async (
  page: number,
  pageSize: number,
  menuItem?: string,
  minRating?: number,
  sortBy?: string,
  sortOrder?: string,
) => {
  let url = `${environment.API_URL}/reviews?page=${page}&pageSize=${pageSize}`;

  if (!!menuItem) url += `&search=${menuItem}`;
  if (!!minRating) url += `&category=${minRating}`;
  if (!!sortBy) url += `&sortBy=${sortBy}`;
  if (!!sortOrder) url += `&sortOrder=${sortOrder}`;

  const result = await axiosInstance.get(url);

  return result;
};

export const createReview = async (payload: IReview) => {
  const url = `${environment.API_URL}/orders`;
  const result = await axiosInstance.post(url, payload);

  return result;
};
