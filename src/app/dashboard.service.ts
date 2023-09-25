import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(public router: Router) {}

  balance: any = 2000000;
  withdrawAmt: any = 0;
  addAmt: any = 0;

  withdraw() {
    this.balance -= this.withdrawAmt;
    this.withdrawAmt = 0;
  }

  add() {
    this.balance += this.addAmt;
    this.addAmt = 0;
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
