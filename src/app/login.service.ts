import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(public router: Router) {}

  validate(username: any, password: any) {
    if (username == 'Sarthak' && password == 'Sarthak') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/']);
    }
  }
}
