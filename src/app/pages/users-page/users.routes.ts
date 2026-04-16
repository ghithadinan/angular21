import { Routes } from '@angular/router';
import { UsersPage } from './users-page';
import { UsersAdd } from './users-add/users-add';

export const usersRoutes: Routes = [
  { path: '', component: UsersPage },
  { path: 'add', component: UsersAdd },
];
