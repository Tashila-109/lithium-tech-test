import { useQuery } from '@tanstack/react-query';

import { selectData, LithiumApiAxiosInstance } from '../ApiInstance';
import { UseQueryOptions } from '../types';
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
