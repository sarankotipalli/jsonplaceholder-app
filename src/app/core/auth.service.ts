import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) {
    // Check if the user ID cookie exists
    if (!this.cookieService.get('userId')) {
      // Set a default user ID (replace with actual authentication logic)
      this.cookieService.set('userId', '1');
    }
  }

  getUserId(): number {
    const userId = this.cookieService.get('userId');
    return userId ? Number(userId) : 0; // Handle cases where the cookie might not exist
  }
}