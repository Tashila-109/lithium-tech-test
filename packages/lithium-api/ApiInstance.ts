import Axios from 'axios';

import { ApiResponse } from './types';

/**
 * Axios instance for Lithium API.
 * @remarks
 * This instance is used to make requests to the Lithium API.
 */
export const LithiumApiAxiosInstance = Axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_LITHIUM_API_URL}/api/v1/analytics/tech-test`,
  timeout: 20000,
  timeoutErrorMessage: 'Network timeout',
});
