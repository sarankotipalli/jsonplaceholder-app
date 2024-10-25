import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AuthService } from './core/auth.service';
import { ApiService } from './core/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PosttestComponent } from './components/posttest/posttest.component';

@NgModule({
  declarations: [
    AppComponent,
    PosttestComponent,
    PostListComponent,
    PostDetailsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    PosttestComponent,
    PostListComponent,
    PostDetailsComponent,
    UserDetailsComponent
  ],
  providers: [ApiService, AuthService, provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})

export class AppModule { }
