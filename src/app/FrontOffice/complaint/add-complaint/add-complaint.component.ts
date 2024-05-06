import { Component } from '@angular/core';
import { Complaint } from 'src/app/Model/Complaint';
import { User } from 'src/app/Model/User';
import { ComplaintService } from 'src/app/Service/complaint.service';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent {
  currentUser !: User; 
  complaint: Complaint = {

    id: 0,
    date: new Date(),
    subject: '',
    description: '',
    status: false
    , 
    user: this.currentUser 
  };

  constructor(private complaintService: ComplaintService) { }

  submitComplaint(): void {
    this.complaintService.addComplaint(this.complaint).subscribe(
      response => {
        console.log('Complaint added successfully:', response);
        // Réinitialisez le formulaire après la soumission réussie si nécessaire
        this.complaint = {
          id: 0,
           date: new Date(),
          subject: '',
          description: '',
          status: false,
          user: this.currentUser 
        };
      },
      error => {
        console.error('Error adding complaint:', error);
      }
    );
  }
}