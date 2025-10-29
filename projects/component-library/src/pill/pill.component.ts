import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'lib-pill',
  templateUrl: './pill.component.html',
  styleUrl: './pill.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PillComponent {
  public title = input<string>()
  public link = input<string>()
}
