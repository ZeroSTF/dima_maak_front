import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../Service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-front',
  templateUrl: './header-front.component.html',
  styleUrls: ['./header-front.component.css']
})
export class HeaderFrontComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit() {}

  logout() {
    this.authService.logout().subscribe(
      (data: any) => {
        localStorage.removeItem('token');
        console.log('Logout successful:', data.message);
        this.router.navigate(["/"]);
      },
      error => {
        console.error('Logout error:', error);
      }
    );
  }
}
