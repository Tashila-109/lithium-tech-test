import { useQuery } from '@tanstack/react-query';

import { selectData, LithiumApiAxiosInstance } from '../ApiInstance';
import { SearchPayoutsResponse, UseQueryOptions } from '../types';
import { GetPayoutsResponse } from '../types';

// Get Payouts
export const payoutsQuery = async () => {
  const response = await LithiumApiAxiosInstance.get('/payouts');
  return response?.data;
};

export const usePayoutsQuery = (options?: UseQueryOptions<GetPayoutsResponse>) =>
  useQuery({
    queryKey: ['payouts'],
    queryFn: () => payoutsQuery(),
    ...options,
  });

// Search Payouts
export const searchPayoutsQuery = async (query: string) => {
  const response = await LithiumApiAxiosInstance.get(`/search?query=${query}`);
  return response?.data;
};

export const useSearchPayoutsQuery = (query: string, options?: UseQueryOptions<SearchPayoutsResponse>) =>
  useQuery({
    queryKey: ['search', query],
    queryFn: () => searchPayoutsQuery(query),
    ...options,
  });
