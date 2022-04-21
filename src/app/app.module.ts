import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LectorComponent } from './lector/lector.component';
import { BannerComponent } from './banner/banner.component';
import { SpectrumComponent } from './spectrum/spectrum.component';

@NgModule({
  declarations: [
    AppComponent,
    LectorComponent,
    BannerComponent,
    SpectrumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
