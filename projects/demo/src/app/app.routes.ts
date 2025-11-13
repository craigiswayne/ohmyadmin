import { Routes } from '@angular/router';
import {FlexboxDemoComponent} from '../flexbox-demo/flexbox-demo.component';
import {TypographyDemoComponent} from '../typography-demo/typography-demo.component';

export const routes: Routes = [
  {
    path: 'flexbox',
    component: FlexboxDemoComponent
  },
  {
    path: 'typography',
    component: TypographyDemoComponent
  }
];
