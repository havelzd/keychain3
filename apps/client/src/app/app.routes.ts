import { Routes } from '@angular/router';
import { SETTING_ROUTES } from './features/settings/settings.routes';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'settings',
    // loadChildren: () =>
    //   import('./features/settings/settings.routes').then(
    //     (r) => r.SETTING_ROUTES,
    //   ),
    children: SETTING_ROUTES,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
