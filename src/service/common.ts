import { request } from '@/utils/request';

export const test = async (id: number) => {
  return await request<{ id: number }>({
    method: 'GET',
    url: 'test',
    params: {
      id
    }
  });
};
