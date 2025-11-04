import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-angular-separator',
  template: '',
  styleUrl: './separator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'separator',
    'aria-label': 'Divider'
  }
})
export class SeparatorComponent {}
