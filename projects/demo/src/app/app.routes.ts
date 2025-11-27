import {Routes} from '@angular/router';
import {DemoLayoutComponent} from '../demo-layout/demo-layout.component';
import {FlexboxDemoComponent} from '../flexbox-demo/flexbox-demo.component';
import {TypographyDemoComponent} from '../typography-demo/typography-demo.component';
import {AvatarDemoComponent} from '../avatar-demo/avatar-demo.component';

export const routes: Routes = [
  {
    path: 'demo',
    component: DemoLayoutComponent,
    title: 'Demo Layout',
    children: [
      {
        path: 'avatar',
        title: 'Avatar',
        component: AvatarDemoComponent
      },
      {
        path: 'flexbox',
        title: 'Flexbox',
        component: FlexboxDemoComponent
      },
      {
        path: 'typography',
        title: 'Typography',
        component: TypographyDemoComponent
      }
    ]
  }
];
