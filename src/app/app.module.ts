import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {PhotoBrowserComponent} from "./photo-browser/photo-browser.component";
import {AppRoutingModule} from "./app-routing.module";
import {PhotoBrowserService} from "./photo-browser/photo-browser.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {PaginationComponent} from "./photo-browser/pagination/pagination.component";
import {PhotoComponent} from "./photo-browser/photo/photo.component";
import {FilterPipe} from "./photo-browser/filter.pipe";


@NgModule({
  declarations: [
    AppComponent,
    PhotoBrowserComponent,
    PaginationComponent,
    PhotoComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PhotoBrowserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
