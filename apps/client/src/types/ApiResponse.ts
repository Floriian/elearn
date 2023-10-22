export interface ApiErrorResponse {
  message: string | string[];
  error: string;
}

export interface ApiPaginationResponse<T> {
  count: number;
  data: T;
}
