import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatIcon,
    RouterLink,
  ],
  templateUrl: './users-page.html',
  styleUrl: './users-page.css',
})
export class UsersPage implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email'];

  dataSource = new MatTableDataSource([
    { id: 1, name: 'Ghitha', email: 'ghitha@mail.com' },
    { id: 2, name: 'User 2', email: 'user2@mail.com' },
    { id: 3, name: 'User 3', email: 'user3@mail.com' },
    { id: 4, name: 'User 4', email: 'user4@mail.com' },
    { id: 5, name: 'User 5', email: 'user5@mail.com' },
    { id: 6, name: 'User 6', email: 'user5@mail.com' },
    { id: 7, name: 'User 7', email: 'user5@mail.com' },
    { id: 8, name: 'User 8', email: 'user5@mail.com' },
    { id: 9, name: 'User 9', email: 'user5@mail.com' },
    { id: 10, name: 'User 10', email: 'user5@mail.com' },
    { id: 11, name: 'User 11', email: 'user5@mail.com' },
    { id: 12, name: 'User 12', email: 'user5@mail.com' },
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  protected onAdd() {}
}
