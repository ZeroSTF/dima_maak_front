import {Component, OnInit} from '@angular/core';
import { Complaint } from 'src/app/Model/Complaint';
import { User } from 'src/app/Model/User';
import { ComplaintService } from 'src/app/Service/complaint.service';
import {UserService} from "../../../Service/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent implements OnInit{
  currentUser !: User;
  complaint: Complaint = {

    id: 0,
    date: new Date(),
    subject: '',
    description: '',
    status: false,
    user: this.currentUser
  };
  constructor(private complaintService: ComplaintService, private userService:UserService, private router:Router) { }
  ngOnInit() {
    this.userService.getProfile().subscribe((data:any)=>{
      this.complaint.user=data;
    });
  }

  submitComplaint(): void {
    this.complaintService.addComplaint(this.complaint).subscribe(
      response => {
        console.log('Complaint added successfully:', response);
        this.router.navigate(["/"]);
      },
      error => {
        console.error('Error adding complaint:', error);
        this.router.navigate(["/"]);
      }
    );
  }
}
