import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {RouterLink} from '@angular/router';
import {AppCommonModule} from 'app/common.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    RouterLink
  ]
})
export class HeaderModule {
}
