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
    totalItems?: number;
    totalPages?: number | null;
    currentPage?: number | null;
    users?: [];
    error?: string;
  };
  metadata: number | null;
}
