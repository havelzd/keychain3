import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ResizableDirective } from '../../directives/resizable.directive';
import { NgIcon } from '@ng-icons/core';

export interface MenuItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ResizableDirective, NgIcon],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMenuComponent {
  items = input.required<MenuItem[]>();
}
