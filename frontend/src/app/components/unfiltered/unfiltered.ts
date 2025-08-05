import { Component, OnInit, signal } from '@angular/core';
import { IUsers, UsersResponse } from '../../models/users.models';
import { PaginationService } from '../../services/pagination/pagination-service';
import { NgxSkeletonLoaderComponent } from "ngx-skeleton-loader";

@Component({
  selector: 'app-unfiltered',
  imports: [NgxSkeletonLoaderComponent],
  templateUrl: './unfiltered.html',
  styleUrl: './unfiltered.scss',
})
export class Unfiltered implements OnInit {
  constructor(private paginationService: PaginationService) {}

  // using signals for reactivity
  users = signal<IUsers[]>([]);
  message = signal<string>('');
  status = signal<string>('');

  ngOnInit(): void {
    this.paginationService.getWithNoPagination().subscribe(
      (response: UsersResponse) => {
        this.users.set(response.data.users ?? []);
        this.message.set(response.message);
        this.status.set(response.status);
      },
      (error: UsersResponse) => {
        this.message.set(error.message ?? '');
        this.status.set(error.status);
      },
    );
  }
}
