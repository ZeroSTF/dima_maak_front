import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../Service/user/user.service";
import {NotificationService} from "../../../Service/user/notification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css']
})
export class AddNotificationComponent implements OnInit{
  notifForm: FormGroup;
  notification:any;
  users:any;
  constructor(private userService:UserService, private notificationService:NotificationService, private router:Router, private fb:FormBuilder) {
    this.notifForm = this.fb.group({
      type: [''],
      content: [''],
      user: ['']
    });
  }
  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers(){
    this.userService.findAllUsers().subscribe(users=>{
      this.users=users;
    });
  }
  onSubmit() {
    if (this.notifForm.valid) {
      const formData = {
        type: this.notifForm.get('type')?.value,
        content: this.notifForm.get('content')?.value,
        user:this.notifForm.get('user')?.value
      }
      this.notification={};
      this.notification.user={};
      this.notification.type = formData.type;
      this.notification.content = formData.content;
      this.notification.user.id=formData.user;
      this.notificationService.add(this.notification).subscribe((response: any) => {
        console.log(response);
        this.router.navigate([`/admin/notification`]);
      }, error => {
        console.error(error);
        this.router.navigate([`/admin/notification`]);
      });
    }
  }
}
