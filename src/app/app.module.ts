import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {HeaderModule} from './components/header/header.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {AppCommonModule} from './common.module';
import {MenuComponent} from './components/menu/menu.component';
import {ErrorHandlerService} from './services/error-handler/error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppCommonModule,
    AppRoutingModule,
    HeaderModule,
    MatSidenavModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    {provide: ErrorHandler, useClass: ErrorHandlerService}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
