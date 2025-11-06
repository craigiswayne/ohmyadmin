import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'row',
  template: '<ng-content></ng-content>',
  styleUrl: 'row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowComponent {}
