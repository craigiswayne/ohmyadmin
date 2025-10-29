import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PillComponent, PillGroupComponent} from 'component-library';

@Component({
  selector: 'lib-showcase',
  imports: [
    PillComponent,
    PillGroupComponent
  ],
  templateUrl: './showcase.html',
  styleUrl: './showcase.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Showcase {

}
