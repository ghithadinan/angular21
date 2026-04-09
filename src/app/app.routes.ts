
import { Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard-page/dashboard-page';
import { UsersPage } from './pages/users-page/users-page';
import { SettingsPage } from './pages/settings-page/settings-page';
export const routes: Routes = [
  { path: '', component: DashboardPage },
  { path: 'users', component: UsersPage },
  { path: 'settings', component: SettingsPage },
];
