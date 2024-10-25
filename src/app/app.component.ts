import { Component } from '@angular/core';
import { PostListComponent } from './components/post-list/post-list.component';
import { ApiService } from './core/api.service';
import { AuthService } from './core/auth.service';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [PostListComponent],
  providers: [ApiService, AuthService]
})

export class AppComponent {}
