import { Payout, ModelMetadata } from '@lithium-types/models';

// Get Request to get Payouts
export type GetPayoutsResponse = {
  data: Payout[];
  metadata: ModelMetadata;
};
