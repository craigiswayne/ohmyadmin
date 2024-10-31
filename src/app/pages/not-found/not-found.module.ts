import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFoundComponent} from './not-found.component';
import {NotFoundRoutingModule} from './not-found-routing.module';
import {AppCommonModule} from 'app/common.module';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule {
}
