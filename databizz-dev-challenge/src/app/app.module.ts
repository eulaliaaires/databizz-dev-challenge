import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsService } from './shared/comments.service';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [AppComponent, CommentsComponent, CommentsListComponent, BannerComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [CommentsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
