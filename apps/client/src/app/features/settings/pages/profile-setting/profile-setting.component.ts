import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroUser } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-profile-setting',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './profile-setting.component.html',
  styleUrl: './profile-setting.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideIcons({ heroUser })],
})
export class ProfileSettingComponent {}
