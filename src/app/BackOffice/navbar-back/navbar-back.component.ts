import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../Service/auth.service";
import {Router} from "@angular/router";
import {UserService} from "../../Service/user/user.service";
import {NotificationService} from "../../Service/user/notification.service";

@Component({
  selector: 'app-navbar-back',
  templateUrl: './navbar-back.component.html',
  styleUrls: ['./navbar-back.component.css']
})
export class NavbarBackComponent implements OnInit{
  profile: any;
  unreadNotificationsCount = 0;
  unreadNotifications:any;
  isDropdownOpen= false;
  constructor(public authService: AuthService, private router: Router, private userService: UserService, private notificationService: NotificationService) {
  }
  ngOnInit() {
    this.userService.getProfile().subscribe(data => {
      this.processProfile(data);
    });
    this.getUnreadNotificationsCount();
    setInterval(() => this.getUnreadNotificationsCount(), 60000); //time for fetching unread notification count
  }
  processProfile(data: any) {
    this.profile = data;
  }
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

  get sortedNotifications(): any[] {
    return this.unreadNotifications.sort((a: any, b: any) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  }
  timeDiff(date: Date): string {
    const now = new Date();
    const dateNotif= new Date(date);
    const diff = now.getTime() - dateNotif.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return 'now';
    }
  }
  getUnreadNotificationsCount() {
    this.notificationService.getUnread().subscribe((data:any) => {
      this.unreadNotificationsCount = data.length;
      this.unreadNotifications=data;
    });
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
