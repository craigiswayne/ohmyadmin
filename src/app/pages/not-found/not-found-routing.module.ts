import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {NotFoundComponent} from './not-found.component';

const routes: Route[] = [
  {
    path: '',
    component: NotFoundComponent,
    title: 'Not Found'
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
export class NotFoundRoutingModule {
}
