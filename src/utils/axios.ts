import axios, { AxiosRequestConfig } from 'axios';

const axiosCore = async (url: string, options: AxiosRequestConfig = {}) => {
  try {
    const response = await axios({
      url,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      ...options,
    });

    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message || error.message || 'Unknown error';
      throw new Error(message);
    }

    throw new Error('Unexpected error');
  }
};

// Add shorthand methods
axiosCore.get = (url: string, config?: AxiosRequestConfig) =>
  axiosCore(url, { method: 'GET', ...config });

axiosCore.post = (url: string, data?: any, config?: AxiosRequestConfig) =>
  axiosCore(url, { method: 'POST', data, ...config });

axiosCore.put = (url: string, data?: any, config?: AxiosRequestConfig) =>
  axiosCore(url, { method: 'PUT', data, ...config });

axiosCore.delete = (url: string, config?: AxiosRequestConfig) =>
  axiosCore(url, { method: 'DELETE', ...config });

const axiosInstance = axiosCore as typeof axiosCore & {
  get: typeof axiosCore.get;
  post: typeof axiosCore.post;
  put: typeof axiosCore.put;
  delete: typeof axiosCore.delete;
};

export default axiosInstance;
