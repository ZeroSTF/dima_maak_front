import {Component, OnInit} from '@angular/core';
import {NotificationService} from "../../../Service/user/notification.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-show-notification',
  templateUrl: './show-notification.component.html',
  styleUrls: ['./show-notification.component.css']
})
export class ShowNotificationComponent implements OnInit{
  notification:any;
  id?:string;
  constructor(private notificationService:NotificationService, private route:ActivatedRoute, private router:Router) {
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.fetchNotification();
    });

  }
  async fetchNotification() {
    let data;
      data = await this.notificationService.getNotification(this.id).toPromise();
    this.notification = data;
  }
  delete() {
    this.notificationService.delete(this.notification.id).subscribe(() => {
      this.router.navigate(['/admin/notification/inbox']);
    });
  }

}
