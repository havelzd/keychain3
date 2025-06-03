import { Routes } from '@angular/router';

export const SETTING_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./settings-shell/settings-shell.component').then(m => m.SettingsShellComponent),
    children: [
      {
        path: 'appearance',
        loadComponent: () =>
          import('./pages/appearance-settings/appearance-settings.component').then(m => m.AppearanceSettingsComponent),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/profile-setting/profile-setting.component').then(m => m.ProfileSettingComponent),
      },
      {
        path: '**',
        redirectTo: 'appearance',
      },
    ],
  },
];
