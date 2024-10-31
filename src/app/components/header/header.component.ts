import {Component, EventEmitter, Output} from '@angular/core';
import { SETTINGS } from 'settings/settings';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() menu_toggled: EventEmitter<void> = new EventEmitter<void>()
  public title = SETTINGS.title;
}
