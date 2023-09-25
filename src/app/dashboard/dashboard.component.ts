import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(
    public dashboardService: DashboardService,
    public router: Router
  ) {}
  ngOnInit() {
    if (!(localStorage.getItem('isLoggedIn') == 'true')) {
      this.router.navigate(['/login']);
    }
  }
}
