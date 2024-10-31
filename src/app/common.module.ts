import {NgModule} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatAnchor, MatButtonModule, MatIconButton} from '@angular/material/button';

const modules = [
  MatAnchor,
  MatButtonModule,
  MatIconButton,
  MatDividerModule,
  MatListModule,
  MatIconModule
];

@NgModule({
  imports: [ ...modules ],
  exports: [ ...modules]
})
export class AppCommonModule {

}
