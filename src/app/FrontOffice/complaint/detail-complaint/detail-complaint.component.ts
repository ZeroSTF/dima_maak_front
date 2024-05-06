import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Complaint } from 'src/app/Model/Complaint';
import { ComplaintService } from 'src/app/Service/complaint.service';


@Component({
  selector: 'app-detail-complaint',
  templateUrl: './detail-complaint.component.html',
  styleUrls: ['./detail-complaint.component.css']
})
export class DetailComplaintComponent implements OnInit {
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
