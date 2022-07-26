import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarModule } from './top-nav-bar/top-nav-bar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    /*---- CUSTOM MODULES ---- */
      TopNavBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
