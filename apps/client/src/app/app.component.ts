import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainNavComponent } from './core/main-nav/main-nav.component';
import { HeaderComponent } from './core/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainNavComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
