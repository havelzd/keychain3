import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal, OnInit } from '@angular/core';
import { ThemeChoiceComponent } from '../../ui/theme-choice/theme-choice.component';

@Component({
  selector: 'app-appearance-settings',
  standalone: true,
  imports: [ThemeChoiceComponent],
  templateUrl: './appearance-settings.component.html',
  styleUrl: './appearance-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppearanceSettingsComponent implements OnInit {
  private readonly document = inject(DOCUMENT);

  private readonly supportedThemes = ['system', 'light', 'dark'];

  protected selectedTheme = signal('system');

  ngOnInit() {
    const themeAttribute = this.document.documentElement.getAttribute('data-theme');
    if (themeAttribute) {
      if (!this.supportedThemes.includes(themeAttribute)) {
        console.warn(`Theme "${themeAttribute}" is not supported. Falling back to "system".`);
        this.document.documentElement.setAttribute('data-theme', 'system');
      }
    }
  }

  onThemeChange(theme: string): void {
    this.document.documentElement.setAttribute('data-theme', theme);
    this.selectedTheme.set(theme);
  }
}
