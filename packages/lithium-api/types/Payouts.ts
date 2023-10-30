import { Payout } from '@models/Payout';

type PayoutsResponse = {
  response: Payout[];
};

// Get Request to get Payouts
export type GetPayoutsResponse = PayoutsResponse;