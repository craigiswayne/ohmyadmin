import {ChangeDetectionStrategy, Component, inject, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {AsyncPipe} from '@angular/common';
import {filter, map, startWith} from 'rxjs';

@Component({
  selector: 'demo-layout',
  templateUrl: './demo-layout.component.html',
  imports: [
    RouterOutlet,
    AsyncPipe
  ],
  styleUrl: 'demo-layout.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoLayoutComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  title = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    startWith(null),
    map(() => {
      let child = this.route.firstChild;

      while (child?.firstChild) {
        child = child.firstChild;
      }

      return child?.snapshot.title || this.route.snapshot.title;
    })
  );
}
