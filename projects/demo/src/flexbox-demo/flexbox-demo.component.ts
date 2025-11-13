import {Component} from '@angular/core';
import {ColumnComponent, RowComponent} from 'component-library';

@Component({
  selector: 'flexbox-demo',
  templateUrl: './flexbox-demo.component.html',
  imports: [
    RowComponent,
    ColumnComponent
  ],
  styleUrl: './flexbox-demo.component.scss'
})
export class FlexboxDemoComponent {}
