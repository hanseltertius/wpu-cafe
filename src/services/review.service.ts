import { environment } from '../constants/environment';
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

export const createReview = async (payload: {
  menuItemId: string;
  reviewerName: string;
  rating: number;
  comment?: string;
}) => {
  const url = `${environment.API_URL}/reviews`;
  const result = await axiosInstance.post(url, payload);

  return result;
};
