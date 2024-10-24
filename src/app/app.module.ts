import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

import { ApiService } from './core/api.service';
import { AuthService } from './core/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
