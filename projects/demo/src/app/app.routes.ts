import {Routes} from '@angular/router';
import {ComponentDemoLayoutComponent} from '../component-demo-layout/component-demo-layout.component';
import {FlexboxDemoComponent} from '../flexbox-demo/flexbox-demo.component';
import {TypographyDemoComponent} from '../typography-demo/typography-demo.component';

export const routes: Routes = [
  {
    path: 'components',
    component: ComponentDemoLayoutComponent,
    children: [
      {
        path: 'flexbox',
        title: 'Flexbox',
        component: FlexboxDemoComponent
      },
      {
        path: 'typography',
        title: 'Typography',
        component: TypographyDemoComponent
      },
    ]
  }
];
