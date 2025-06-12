import { Routes } from '@angular/router';
import { SETTING_ROUTES } from './features/settings/settings.routes';
import { VAULT_ROUTES } from './features/vault/vault.routes';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'vault',
    children: VAULT_ROUTES,
  },
  {
    path: 'settings',
    children: SETTING_ROUTES,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
