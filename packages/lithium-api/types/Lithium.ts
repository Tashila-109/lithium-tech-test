export type LithiumResponse<T> = {
  data: T;
  isError: boolean;
  errors: LithiumErrorItem[];
};

export type LithiumErrorItem = {
  title: string;
  details: string;
  errorCode: string;
};
