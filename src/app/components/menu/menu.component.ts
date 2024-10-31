import {Component} from '@angular/core';
import {SETTINGS} from 'settings/settings';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  public menu = SETTINGS.menu;
}
