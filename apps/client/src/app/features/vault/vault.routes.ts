import { Routes } from '@angular/router';

export const VAULT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./vault-shell/vault-shell.component').then(m => m.VaultShellComponent),
  },
];
