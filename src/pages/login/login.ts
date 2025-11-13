import { Component } from '@angular/core';
import {LoginFormComponent} from 'component-library';

@Component({
  selector: 'page-login',
  imports: [
    LoginFormComponent
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

}
