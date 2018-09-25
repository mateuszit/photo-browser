import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {PhotoBrowserComponent} from "./photo-browser/photo-browser.component";
import {AppRoutingModule} from "./app-routing.module";
import {PhotoBrowserService} from "./photo-browser/photo-browser.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    PhotoBrowserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PhotoBrowserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
