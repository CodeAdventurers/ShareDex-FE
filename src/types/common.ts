export interface TResponse<T = unknown> {
  code: number;
  data: T;
  message: string;
}

export const enum EResponseCode {
  /** 错误code */
  error = -1,
  /** 错误正常code */
  success = 0,
  /** 登陆失效 */
  needAuthorization = 401
}
