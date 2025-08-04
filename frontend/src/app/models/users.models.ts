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
    //limit-offset
    previousPage?: number;
    currentPage?: number;
    nextPage?: number;
    //cursor
    previousCursorId?: number;
    currentCursorId?: number;
    nextCursorId?: number;
    //general
    totalPages?: number;
    totalItems?: number;
  };
}
