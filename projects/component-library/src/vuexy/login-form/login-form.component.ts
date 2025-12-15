import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FlexboxRowComponent} from '../../flexbox/row/flexbox-row.component';
import {FlexboxColumnComponent} from '../../flexbox/column/flexbox-column.component';

@Component({
  selector: 'lib-vuexy-login-form',
  imports: [
    FlexboxColumnComponent,
    FlexboxRowComponent,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {

}
