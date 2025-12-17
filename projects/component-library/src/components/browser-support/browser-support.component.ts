import {Component, input} from '@angular/core';
import {AvatarComponent, AvatarGroupComponent} from 'component-library';

@Component({
  selector: 'browser-support',
  templateUrl: 'browser-support.component.html',
  imports: [
    AvatarGroupComponent,
    AvatarComponent
  ],
  styleUrl: 'browser-support.component.scss'
})
export class BrowserSupportComponent {
  chrome = input<boolean>(true)
  edge = input<boolean>(true)
  firefox = input<boolean>(true)
  safari = input<boolean>(false)

  protected image_url_supported = 'https://raw.githubusercontent.com/web-platform-dx/developer-signals/refs/heads/main/img/available.svg'
  protected image_url_unsupported = 'https://raw.githubusercontent.com/web-platform-dx/developer-signals/refs/heads/main/img/unavailable.svg'
}
