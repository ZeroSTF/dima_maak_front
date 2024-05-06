import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/Model/Complaint';
import { ComplaintService } from 'src/app/Service/complaint.service';


@Component({
  selector: 'app-update-complaint',
  templateUrl: './update-complaint.component.html',
  styleUrls: ['./update-complaint.component.css']
})
export class UpdateComplaintComponent implements OnInit {
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
    this.router.navigate(['/ListComplaint']);
  }
}
