import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Complaint } from 'src/app/Model/Complaint';
import { ComplaintService } from 'src/app/Service/complaint.service';

@Component({
  selector: 'app-detail-complaint-back',
  templateUrl: './detail-complaint-back.component.html',
  styleUrls: ['./detail-complaint-back.component.css']
})
export class DetailComplaintBackComponent {
  complaintId!: number;
  complaint!: Complaint;

  constructor(
    private route: ActivatedRoute,
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
}
