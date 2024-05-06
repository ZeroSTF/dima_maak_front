import {Component, OnInit} from '@angular/core';
import {NotificationService} from "../../../Service/user/notification.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-notification',
  templateUrl: './edit-notification.component.html',
  styleUrls: ['./edit-notification.component.css']
})
export class EditNotificationComponent implements OnInit {
  notification: any;
  id?: string;
  notifForm: FormGroup;

  constructor(private notificationService: NotificationService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.notifForm = this.fb.group({
      type: [''],
      content: ['']
    });
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
    this.populateForm();
  }

  populateForm() {
    this.notifForm.patchValue({
      type: this.notification.type,
      content: this.notification.content
    });
  }

  onSubmit() {
    if (this.notifForm.valid) {
      const formData = {
        type: this.notifForm.get('type')?.value,
        content: this.notifForm.get('content')?.value
      }
      this.notification.type = formData.type;
      this.notification.content = formData.content;
      this.notificationService.update(this.notification).subscribe((response: any) => {
        console.log(response);
        this.router.navigate([`/admin/notification`]);
      }, error => {
        console.error(error);
        this.router.navigate([`/admin/notification`]);
      });
    }
  }

}
