import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageProfileTileComponent } from './home-page-profile-tile/home-page-profile-tile.component';
import { ProfileFeedComponent } from './profile-feed/profile-feed.component';
import { FindFriendsComponent } from './find-friends/find-friends.component';
import { PublicFeedComponent } from './public-feed/public-feed.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HomepageComponent } from './homepage/homepage.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { LoginComponent } from './login/login.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { GithubLoginComponent } from './github-login/github-login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageProfileTileComponent,
    ProfileFeedComponent,
    FindFriendsComponent,
    PublicFeedComponent,
    HomepageComponent,
    PostDetailComponent,
    LoginComponent,
    EditDetailComponent,
    RepoListComponent,
    GithubLoginComponent,
    RepoDetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    EditorModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
