import { Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard-page/dashboard-page';
import { SettingsPage } from './pages/settings-page/settings-page';
import { ProfilePage } from './pages/profile-page/profile-page';
import { UsersAdd } from './pages/users-page/users-add/users-add';

export const routes: Routes = [
  { path: '', component: DashboardPage },
  {
    path: 'users',
    loadChildren: () => import('./pages/users-page/users.routes')
      .then((m) => m.usersRoutes),
  },
  { path: 'users/add', component: UsersAdd },
  { path: 'settings', component: SettingsPage },
  { path: 'profile', component: ProfilePage },
];
