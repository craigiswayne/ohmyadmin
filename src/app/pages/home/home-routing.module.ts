import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {SETTINGS} from 'settings/settings';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    title: `${SETTINGS.title} | Home`
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {
}
