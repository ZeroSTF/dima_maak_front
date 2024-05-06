import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NotificationService} from "../../../Service/user/notification.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
  notifications!: any;
  current?: string;
  currentBool = false;

  constructor(private notificationService: NotificationService, private route: ActivatedRoute, private router:Router, private cdr: ChangeDetectorRef) {
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
  delete(n: any) {
    this.notificationService.delete(n.id).subscribe(() => {
      // Remove the deleted user from the users array
      this.notifications = this.notifications.filter((notification: any) => notification.id !== n.id);
      this.cdr.detectChanges();
    });
  }
  edit(n:any){
    this.router.navigate([`/admin/editNotification/${n.id}`])
  }
  get sortedNotifications(): any[] {
    return this.notifications.sort((a: any, b: any) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  }

}
