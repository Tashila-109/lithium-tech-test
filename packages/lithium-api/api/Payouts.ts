import { useQuery } from '@tanstack/react-query';

import { selectData, LithiumApiAxiosInstance } from '../ApiInstance';
import { UseQueryOptions } from '../types';
import { GetPayoutsResponse } from '../types';

// Get Payouts
export const payoutsQuery = () =>
  selectData<GetPayoutsResponse>(LithiumApiAxiosInstance.get('/payouts'));

export const useCorporateQuery = (options?: UseQueryOptions<GetPayoutsResponse>) =>
  useQuery({
    queryKey: ['payouts'],
    queryFn: () => payoutsQuery(),
    ...options,
  });
