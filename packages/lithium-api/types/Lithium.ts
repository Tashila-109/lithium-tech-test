export type LithiumResponse<T> = {
  data: T;
};

export type LithiumErrorItem = {
  title: string;
  details: string;
  errorCode: string;
};
