import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavMenuComponent } from '../../../shared/components/nav-menu/nav-menu.component';
import { RouterOutlet } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { heroPaintBrush, heroPhoto } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-settings-shell',
  standalone: true,
  imports: [NavMenuComponent, RouterOutlet],
  templateUrl: './settings-shell.component.html',
  styleUrl: './settings-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideIcons({ heroPaintBrush, heroPhoto })],
})
export class SettingsShellComponent {
  protected readonly menuItems = [
    {
      label: 'Profile',
      route: 'profile',
      icon: heroPhoto,
    },
    {
      label: 'Appearance',
      route: 'appearance',
      icon: heroPaintBrush,
    },
  ];
}
