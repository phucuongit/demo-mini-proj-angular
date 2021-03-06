import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnInit {
  isAuth = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isAuth = this.authService.isAuthenticated();
    console.log(this.isAuth);
  }
  loginApp() {
    this.authService.loggin();
    this.isAuth = this.authService.isAuthenticated();
  }
  logoutApp() {
    this.authService.logout();
    this.isAuth = this.authService.isAuthenticated();
  }
}
