import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  constructor(private http: HttpClient) {}
  private readonly baseUrl = 'http://localhost:4000/';

  // get with no pagination
  getWithNoPagination(): Observable<any> {
    return this.http.get(this.baseUrl + 'no-pagination');
  }

  // get with limit-offset

  // get with cursor based pagination
}
