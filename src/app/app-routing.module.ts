import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [
    PostDetailsComponent,
    UserDetailsComponent],
  imports: [CommonModule],
  exports: [
    PostDetailsComponent,
    UserDetailsComponent],
  providers: []
})


export class AppRoutingModule { }
