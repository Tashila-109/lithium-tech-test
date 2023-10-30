import { UseQueryOptions as RQUseQueryOptions, UseMutationOptions as RQUseMutationOptions, QueryKey } from '@tanstack/react-query';

import { ApiError } from '../types';

export type UseQueryOptions<TData, TError = TData> = RQUseQueryOptions<TData, ApiError<TError>, TData, QueryKey>;
export type UseMutationOptions<TParameters, TData, TError = TData> = RQUseMutationOptions<TData, ApiError<TError>, TParameters>;
