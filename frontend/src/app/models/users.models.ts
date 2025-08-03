export interface IUsers {
  id: string;
  username: string;
  email: string;
  location: string;
}

export interface UsersResponse {
  code: string;
  status: string;
  message: string;
  data: {
    users?: [];
    error?: string;
  };
  metadata: {
    previousPage?: number;
    currentPage?: number;
    nextPage?: number;
    totalPages?: number;
    totalItems?: number;
  };
}
