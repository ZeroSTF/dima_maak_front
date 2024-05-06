import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Complaint } from 'src/app/Model/Complaint';
import { Router } from '@angular/router';
import { ComplaintService } from 'src/app/Service/complaint.service';
@Component({
  selector: 'app-edit-complaint-back',
  templateUrl: './edit-complaint-back.component.html',
  styleUrls: ['./edit-complaint-back.component.css']
})
export class EditComplaintBackComponent {
  complaintId!: number;
  complaint!: Complaint;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private complaintService: ComplaintService
  ) { }

  ngOnInit(): void {
    this.complaintId = this.route.snapshot.params['id'];
    this.loadComplaint();
  }

  loadComplaint(): void {
    this.complaintService.getComplaint(this.complaintId).subscribe(
      complaint => {
        this.complaint = complaint;
      },
      error => {
        console.error('Error fetching complaint:', error);
      }
    );
  }

  updateComplaint(): void {
    this.complaintService.updateComplaint(this.complaint).subscribe(
      () => {
        console.log('Complaint updated successfully');
       
      },
      error => {
        console.error('Error updating complaint:', error);
      }
      
    );
    this.router.navigate(['/admin/ListComplaintBack']);
  }
}
