import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {
    // Simulating user login
    if (!localStorage.getItem('userId')) {
      localStorage.setItem('userId', '1');  // Simulating a logged-in user
    }
  }

  getUserId(): number {
    return Number(localStorage.getItem('userId'));
  }
}
