import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../Service/auth.service";
import {Router} from "@angular/router";
import {UserService} from "../../Service/user/user.service";
import {NotificationService} from "../../Service/user/notification.service";
import {fromEvent, interval, merge, startWith, tap} from 'rxjs';
import { switchMap, throttleTime } from 'rxjs/operators';

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
    // Define sources of user activity
    const clicks = fromEvent(document, 'click');
    const mouseMoves = fromEvent(document, 'mousemove');
    const keyPresses = fromEvent(document, 'keypress');

    // Merge the streams
    const userActivity = merge(clicks, mouseMoves, keyPresses);

    // Throttle the events (e.g., only allow one event per second)
    const throttledUserActivity = userActivity.pipe(throttleTime(1000));

    // Switch to interval when user is active, and stop when user is idle
    throttledUserActivity.pipe(
      switchMap(() => {
        // User is active: start interval
        return interval(60000).pipe(
          startWith(0),  // To immediately fetch the count at the start
          tap(() => this.getUnreadNotificationsCount())
        );
      })
    ).subscribe();
  }
  processProfile(data: any) {
    this.profile = data;
  }
  //add a new empty method
  logout() {
    this.authService.logout().subscribe(
      (data: any) => {
        localStorage.removeItem('token');
        console.log('Logout successful:', data.message);
        window.location.href = '/';
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
