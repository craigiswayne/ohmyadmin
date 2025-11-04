import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PillComponent, PillGroupComponent, SeparatorComponent, ThemeCustomizerComponent} from 'component-library';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PillComponent, PillGroupComponent, ThemeCustomizerComponent, SeparatorComponent],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ohmyadmin');
}
