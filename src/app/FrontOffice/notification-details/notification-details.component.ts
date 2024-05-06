import {Component, OnInit} from '@angular/core';
import {NotificationService} from "../../Service/user/notification.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.css']
})
export class NotificationDetailsComponent implements OnInit{
  id?:String;
  notification:any;
  constructor(private notificationService:NotificationService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.notificationService.getNotification(this.id).subscribe((notification:any)=>{
      this.notification=notification;
      console.log(notification);
    });
  }
}
