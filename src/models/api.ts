export interface PaginationParams {
  skip: number;
  limit: number;
}

export interface SearchParams {
  q: string;
}

export interface ListResponse {
  limit: number;
  skip: number;
  total: number;
}
