import { Component, OnInit, signal } from '@angular/core';
import { PaginationService } from '../../services/pagination/pagination-service';
import { IUsers, UsersResponse } from '../../models/users.models';
import { NgxSkeletonLoaderComponent } from "ngx-skeleton-loader";

@Component({
  selector: 'app-cursor',
  imports: [NgxSkeletonLoaderComponent],
  templateUrl: './cursor.html',
  styleUrl: './cursor.scss',
})
export class Cursor implements OnInit {
  constructor(private paginationService: PaginationService) {}

  //signals for state mgnmt
  users = signal<IUsers[]>([]);
  status = signal<string>('');
  message = signal<string>('');

  //deal with pagination
  cursor_id = signal<number>(0);
  limit = signal<number>(10); //Hardcoded to 10
  current_cursor_id = signal<number>(0);
  next_cursor_id = signal<number>(0);
  previous_cursor_id = signal<number>(0);
  total_pages = signal<number>(0);
  total_items = signal<number>(0);

  //previous page
  previousPage(cursor_id: number) {
    this.paginationService
      .getWithCursor(String(this.previous_cursor_id()), String(this.limit()))
      .subscribe(
        (response: UsersResponse) => {
          this.status.set(response.status);
          this.message.set(response.message);
          this.users.set(response.data.users ?? []);

          //pagination data
          this.current_cursor_id.set(response.metadata.currentCursorId ?? 0);
          this.next_cursor_id.set(response.metadata.nextCursorId ?? 0);
          this.previous_cursor_id.set(response.metadata.previousCursorId ?? 0);
        },
        (error: UsersResponse) => {
          this.status.set(error.status);
          this.message.set(error.message);
        },
      );
  }

  //next page
  nextPage(cursor_id: number) {
    this.paginationService
      .getWithCursor(String(this.next_cursor_id()), String(this.limit()))
      .subscribe(
        (response: UsersResponse) => {
          this.status.set(response.status);
          this.message.set(response.message);
          this.users.set(response.data.users ?? []);

          //pagination data
          this.current_cursor_id.set(response.metadata.currentCursorId ?? 0);
          this.next_cursor_id.set(response.metadata.nextCursorId ?? 0);
          this.previous_cursor_id.set(response.metadata.previousCursorId ?? 0);
        },
        (error: UsersResponse) => {
          this.status.set(error.status);
          this.message.set(error.message);
        },
      );
  }

  ngOnInit(): void {
    this.paginationService
      .getWithCursor(String(this.cursor_id()), String(this.limit()))
      .subscribe(
        (response: UsersResponse) => {
          this.status.set(response.status);
          this.message.set(response.message);
          this.users.set(response.data.users ?? []);

          //pagination data
          this.current_cursor_id.set(response.metadata.currentCursorId ?? 0);
          this.next_cursor_id.set(response.metadata.nextCursorId ?? 0);
          this.previous_cursor_id.set(response.metadata.previousCursorId ?? 0);
          this.total_items.set(response.metadata.totalItems ?? 0);
          this.total_pages.set(response.metadata.totalPages ?? 0);
        },
        (error: UsersResponse) => {
          this.status.set(error.status);
          this.message.set(error.message);
        },
      );
  }
}
