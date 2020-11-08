import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostConponent } from "./post/post.conponent";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {Post2Component} from "./post2/post2.component";


@NgModule({
  declarations: [
    AppComponent,
    PostConponent,
    HeaderComponent,
    FooterComponent,
    Post2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
