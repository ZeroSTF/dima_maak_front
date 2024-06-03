import {Component, OnInit} from '@angular/core';
import {LoyaltyService} from "../../../Service/user/loyalty.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-show-loyalty',
  templateUrl: './show-loyalty.component.html',
  styleUrls: ['./show-loyalty.component.css']
})
export class ShowLoyaltyComponent implements OnInit{
  loyalty:any;
  id?:string;
  constructor(private loyaltyService:LoyaltyService, private route:ActivatedRoute, private router:Router) {
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.fetchLoyalty();
    });
  }
  async fetchLoyalty() {
    let data;
      data = await this.loyaltyService.getLoyalty(this.id).toPromise();
    this.loyalty = data;
  }
  delete() {
    this.loyaltyService.delete(this.loyalty.id).subscribe(() => {
      this.router.navigate(['/admin/loyalty']);
    });
  }

}
