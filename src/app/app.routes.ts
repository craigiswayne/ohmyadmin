import {Routes} from '@angular/router';
import {authenticated} from '../guards/authenticated/authenticated.guard';
import {unauthenticated} from '../guards/unauthenticated/unauthenticated.guard';
import {Login} from '../pages/login/login';
import {BlankComponent} from '../pages/blank/blank.component';
import {FourOhFourComponent} from '../pages/404/404.component';

const app_title = 'OhMyAdmin';

export const routes: Routes = [
  /**
   * Pages that require authorization / login
   */
  {
    path: '',
    title: app_title,
    canActivate: [authenticated],
    children: [
      {
        path: '',
        component: BlankComponent
      },
      {
        path: 'me',
        title: 'Profile',
        component: BlankComponent
      }
    ],
  },
  {
    path: 'status',
    title: `${app_title} | Status`,
    component: BlankComponent
  },
  {
    path: 'login',
    canActivate: [unauthenticated],
    title: `${app_title} | Login`,
    component: Login
  },

  {
    path: '**',
    component: FourOhFourComponent
  }
];
