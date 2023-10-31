import { useQuery } from '@tanstack/react-query';

import { LithiumApiAxiosInstance } from '../ApiInstance';
import { UseQueryOptions } from '../types';
import { GetPayoutsResponse } from '../types';

// Get Payouts
export const payoutsQuery = async () => {
  const response: GetPayoutsResponse = await LithiumApiAxiosInstance.get('/payouts');
  return response;
};

export const usePayoutsQuery = (options?: UseQueryOptions<GetPayoutsResponse>) =>
  useQuery({
    queryKey: ['payouts'],
    queryFn: () => payoutsQuery(),
    ...options,
  });
