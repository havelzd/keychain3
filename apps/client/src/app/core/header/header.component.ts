import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroSquaresPlus, heroXMark } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-header',
  standalone: true,
  host: {
    class: 'flex',
  },
  imports: [NgIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [provideIcons({ heroXMark, heroSquaresPlus })],
})
export class HeaderComponent {}
