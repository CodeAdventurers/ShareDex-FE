import axios, {
  type AxiosResponse,
  type AxiosError,
  type AxiosRequestConfig
} from 'axios';
import { type TResponse, EResponseCode } from '@/types/common';
import usePromise from '@/hooks/usePromise';

const timeout = 1 * 60 * 1000;
const baseURL = '/api';

const instance = axios.create({
  baseURL,
  timeout
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config;
  },
  async (error) => {
    // 对请求错误做些什么
    return await Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  async (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return await Promise.reject(error);
  }
);

/**
 * 请求接口
 * @param config AxiosRequestConfig
 * @returns 固定返回 TResponse 格式;
 */

export const request = async <T = unknown>(config: AxiosRequestConfig) => {
  const isDownload = config.responseType === 'blob';

  // 处理二进制的情况
  const resolveDownload = async (res: AxiosResponse<TResponse<T>>) => {
    const { data } = res;
    const [resolve, P] = usePromise<TResponse<T>>();
    const reader = new FileReader();
    reader.readAsText(data as unknown as Blob, 'utf-8');
    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result as string) as TResponse<T>;
        if (json !== undefined) {
          resolve(json);
          return;
        }
      } catch (e) {
        console.log(e);
      }
      const reg = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
      const fileName = reg.exec(res.headers['content-disposition'])?.[1];

      const blob = new Blob([data as unknown as Blob], {
        type: res.headers['content-type']
      });
      resolve({
        code: EResponseCode.success,
        data: {
          name: fileName,
          blob
        },
        message: '',
        isRequestSuccess: true
      } as unknown as TResponse<T>);
    };
    return await P;
  };

  try {
    const res = await instance.request<TResponse<T>>(config);
    let { data } = res;
    if (isDownload) {
      data = await resolveDownload(res);
    }
    return data;
  } catch (e) {
    const defaultRes = {
      code: EResponseCode.error,
      message: (e as AxiosError).message,
      data: null
    };
    return defaultRes;
  }
};
