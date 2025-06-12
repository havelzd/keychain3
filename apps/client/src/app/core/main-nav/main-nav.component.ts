import { ChangeDetectionStrategy, Component } from '@angular/core';
import { heroCog6ToothSolid, heroHomeSolid, heroLockClosedSolid } from '@ng-icons/heroicons/solid';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [NgIcon, RouterLink, RouterLinkActive],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss',
  providers: [provideIcons({ heroCog6ToothSolid, heroHomeSolid, heroLockClosedSolid })],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainNavComponent {
  protected readonly menuItems = [
    { label: 'Home', route: 'home', icon: heroHomeSolid },
    { label: 'Vault', route: 'vault', icon: heroLockClosedSolid },
    { label: 'Setting', route: 'settings', icon: heroCog6ToothSolid },
  ];
}
