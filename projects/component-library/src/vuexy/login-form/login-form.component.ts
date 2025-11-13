import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RowComponent} from '../../flexbox/row/row.component';
import {ColumnComponent} from '../../flexbox/column/column.component';

@Component({
  selector: 'lib-vuexy-login-form',
  imports: [
    ColumnComponent,
    RowComponent,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {

}
