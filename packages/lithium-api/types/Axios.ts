import { AxiosResponse, AxiosError } from 'axios';

import { LithiumResponse } from './Lithium';

export type ApiResponse<T> = AxiosResponse<LithiumResponse<T>>;
export type ApiError<T> = AxiosError<LithiumResponse<T>>;