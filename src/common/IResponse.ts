import { IError } from './IError';

export interface IResponse<T> {
  success?: boolean;
  body?: T;
  authorized?: boolean;
  token?: string;
  error?: IError;
  total?: number;
  message?: string;
}
