import { Component, OnInit, signal } from '@angular/core';
import { PaginationService } from '../../services/pagination/pagination-service';
import { IUsers, UsersResponse } from '../../models/users.models';

@Component({
  selector: 'app-limit-offset',
  imports: [],
  templateUrl: './limit-offset.html',
  styleUrl: './limit-offset.scss',
})
export class LimitOffset implements OnInit {
  constructor(private paginationService: PaginationService) {}

  //signals for state mngmt
  status = signal<string>('');
  message = signal<string>('');
  users = signal<IUsers[]>([]);

  //pagination data
  page = signal('');
  limit = signal('10'); //Hardcoded the limit to 10
  current_page = signal<number>(0);
  next_page = signal<number>(0);
  previous_page = signal<number>(0);
  total_pages = signal<number>(0);
  total_items = signal<number>(0);

  //to loop through pages
  pages = signal<string[]>([]);

  ////previous page
  previousPage() {
    this.paginationService
      .getWithLimitOffset(String(this.previous_page()), this.limit())
      .subscribe(
        (response: UsersResponse) => {
          this.status.set(response.status);
          this.message.set(response.message);
          this.users.set(response.data.users ?? []);

          //pagination values
          this.current_page.set(response.metadata.currentPage ?? 0);
          this.next_page.set(response.metadata.nextPage ?? 0);
          this.previous_page.set(response.metadata.previousPage ?? 0);
          this.total_pages.set(response.metadata.totalPages ?? 0);
        },
        (error: UsersResponse) => {
          this.status.set(error.status);
          this.message.set(error.message ?? '');
        },
      );
  }

  ////next page
  nextPage() {
    this.paginationService
      .getWithLimitOffset(String(this.next_page()), this.limit())
      .subscribe(
        (response: UsersResponse) => {
          this.status.set(response.status);
          this.message.set(response.message);
          this.users.set(response.data.users ?? []);

          //pagination values
          this.current_page.set(response.metadata.currentPage ?? 0);
          this.next_page.set(response.metadata.nextPage ?? 0);
          this.previous_page.set(response.metadata.previousPage ?? 0);
          this.total_pages.set(response.metadata.totalPages ?? 0);
        },
        (error: UsersResponse) => {
          this.status.set(error.status);
          this.message.set(error.message ?? '');
        },
      );
  }

  //goto page
  gotoPage(page: string) {
    this.paginationService.getWithLimitOffset(page, this.limit()).subscribe(
      (response: UsersResponse) => {
        this.status.set(response.status);
        this.message.set(response.message);
        this.users.set(response.data.users ?? []);

        //pagination values
        this.current_page.set(response.metadata.currentPage ?? 0);
        this.next_page.set(response.metadata.nextPage ?? 0);
        this.previous_page.set(response.metadata.previousPage ?? 0);
        this.total_pages.set(response.metadata.totalPages ?? 0);
      },
      (error: UsersResponse) => {
        this.status.set(error.status);
        this.message.set(error.message ?? '');
      },
    );
  }

  ngOnInit(): void {
    this.paginationService
      .getWithLimitOffset(this.page(), this.limit())
      .subscribe(
        (response: UsersResponse) => {
          this.status.set(response.status);
          this.message.set(response.message);
          this.users.set(response.data.users ?? []);

          //pagination values
          this.current_page.set(response.metadata.currentPage ?? 0);
          this.next_page.set(response.metadata.nextPage ?? 0);
          this.previous_page.set(response.metadata.previousPage ?? 0);
          this.total_pages.set(response.metadata.totalPages ?? 0);

          //this was really neat. never seen this ds before
          this.pages.set(
            Array.from( { length: Number(this.total_pages()) }, (_, i) => `${i + 1}`,),
          );
        },
        (error: UsersResponse) => {
          this.status.set(error.status);
          this.message.set(error.message ?? '');
        },
      );
  }
}
