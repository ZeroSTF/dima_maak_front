import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Complaint } from 'src/app/Model/Complaint';
import { ComplaintService } from 'src/app/Service/complaint.service';

@Component({
  selector: 'app-list-complaint-back',
  templateUrl: './list-complaint-back.component.html',
  styleUrls: ['./list-complaint-back.component.css']
})
export class ListComplaintBackComponent {
  complaints: Complaint[] = [];
  constructor(private complaintService: ComplaintService ,  private router: Router) { }

  ngOnInit(): void {
    this.loadComplaints();
  }

  loadComplaints(): void {
    this.complaintService.getAllComplaints().subscribe(
      complaints => {
        this.complaints = complaints;
      },
      error => {
        console.error('Error fetching complaints:', error);
      }
    );
  }
  updateComplaint(id: number): void {
    this.router.navigate(['/admin/updateComplaintBack', id]);
  }
  DetailComplaint(id: number): void {
    this.router.navigate(['/admin/detailComplaintBack', id]);
  }

  // goToAddComplaint(): void {
  //   this.router.navigate(['/addComplaint']);
  // }

  deleteComplaint(id: number): void {
    if (confirm('Are you sure you want to delete this complaint?')) {
      this.complaintService.deleteComplaint(id).subscribe(
        () => {
          // Suppression réussie, recharger la liste des plaintes
          this.loadComplaints();
          // Afficher une alerte de suppression réussie
          window.alert('Complaint deleted successfully!');
        },
        error => {
          console.error('Error deleting complaint:', error);
        }
      );
    }
  }
  
}
