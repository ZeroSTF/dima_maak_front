import {Component, OnInit} from '@angular/core';
import {NotificationService} from "../../Service/user/notification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-front-notifications',
  templateUrl: './front-notifications.component.html',
  styleUrls: ['./front-notifications.component.css']
})
export class FrontNotificationsComponent implements OnInit {
  notifications: any;

  constructor(private notificationService: NotificationService, private router: Router) {
  }

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.notificationService.getAllByUser().subscribe((response: any) => {
      this.notifications = response;
    });
    console.log(this.notifications);
  }

  get sortedNotifications(): any[] {
    return this.notifications.sort((a: any, b: any) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  }

  viewNotification(notification: any) {
    this.router.navigate([`/notification/${notification.id}`]);
  }

}
