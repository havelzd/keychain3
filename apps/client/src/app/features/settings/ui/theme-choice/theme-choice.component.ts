import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-theme-choice',
  standalone: true,
  imports: [],
  templateUrl: './theme-choice.component.html',
  styleUrl: './theme-choice.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeChoiceComponent {
  _id = input.required<string>();
  _label = input.required<string>();
  _name = input.required<string>();
  _value = input.required<string>();
  isChecked = input<boolean>();
  changed = output<string>();
}
