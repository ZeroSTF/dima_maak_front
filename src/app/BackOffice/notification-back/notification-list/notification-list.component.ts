import {Component, OnInit} from '@angular/core';
import {NotificationService} from "../../../Service/user/notification.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
  notifications!: any;
  current?: string;
  currentBool = false;

  constructor(private notificationService: NotificationService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.current = params['current'];
      this.fetchNotifications();
    });

  }

  fetchNotifications() {
    if (this.current) {
      this.currentBool=true;
      this.notificationService.getAllByUser().subscribe((notifications:any)=>{
        this.notifications=notifications;
      });
    } else {
      this.notificationService.getAll().subscribe((notifications: any) => {
        this.notifications = notifications;
      });
    }
  }

}
