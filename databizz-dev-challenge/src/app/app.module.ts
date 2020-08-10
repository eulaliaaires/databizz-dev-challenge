import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    CommentsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
