import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {AsyncPipe} from '@angular/common';
import {filter, map, startWith} from 'rxjs';

@Component({
  selector: 'demo-layout',
  templateUrl: './component-demo-layout.component.html',
  imports: [
    RouterOutlet,
    AsyncPipe
  ],
  styleUrl: 'component-demo-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentDemoLayoutComponent {
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
