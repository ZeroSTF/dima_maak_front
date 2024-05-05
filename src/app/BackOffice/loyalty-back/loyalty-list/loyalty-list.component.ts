import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LoyaltyService} from "../../../Service/user/loyalty.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-loyalty-list',
  templateUrl: './loyalty-list.component.html',
  styleUrls: ['./loyalty-list.component.css']
})
export class LoyaltyListComponent implements OnInit {
  loyalties!: any;
  constructor(private loyaltyService: LoyaltyService, private cdr: ChangeDetectorRef, private router:Router) {
  }

  ngOnInit(): void {
    this.fetchLoyalties();
  }

  fetchLoyalties() {
    this.loyaltyService.getAll().subscribe((loyalties: any) => {
      this.loyalties = loyalties;
    });
  }

  delete(l: any) {
    this.loyaltyService.delete(l.id).subscribe(() => {
      this.loyalties = this.loyalties.filter((loyalty: any) => loyalty.id !== l.id);
      this.cdr.detectChanges();
    });
  }
  edit(l:any){
    this.router.navigate([`/admin/editLoyalty/${l.id}`])
  }
  get sortedLoyalties(): any[] {
    return this.loyalties.sort((a: any, b: any) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  }
}
