import { Component, OnInit, signal } from '@angular/core';
import { IUsers, UsersResponse } from '../../models/users.models';
import { PaginationService } from '../../services/pagination/pagination-service';

@Component({
  selector: 'app-unfiltered',
  imports: [],
  templateUrl: './unfiltered.html',
  styleUrl: './unfiltered.scss',
})
export class Unfiltered implements OnInit {
  constructor(private paginationService: PaginationService) {}

  // using signals for reactivity
  users = signal<IUsers[]>([]);
  message = signal<string>('');

  ngOnInit(): void {
    this.paginationService.getWithNoPagination().subscribe(
      (response: UsersResponse) => {
        this.users.set(response.data.users ?? []);
        console.log(this.users());
      },
      (error: UsersResponse) => {
        this.message.set(error.data.error ?? '');
      },
    );
  }
}
