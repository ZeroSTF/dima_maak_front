import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../Service/user/user.service";
import {LoyaltyService} from "../../../Service/user/loyalty.service";

@Component({
  selector: 'app-edit-loyalty',
  templateUrl: './edit-loyalty.component.html',
  styleUrls: ['./edit-loyalty.component.css']
})
export class EditLoyaltyComponent implements OnInit{
  loyaltyForm: FormGroup;
  loyalty:any;
  id?: string;
  constructor(private loyaltyService:LoyaltyService, private userService:UserService, private router:Router, private fb:FormBuilder, private route:ActivatedRoute) {
    this.loyaltyForm = this.fb.group({
      reason: [''],
      value: ['']
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.fetchLoyalty();
    });
  }
  async fetchLoyalty(){
    let data;
    data = await this.loyaltyService.getLoyalty(this.id).toPromise();
    this.loyalty = data;
    this.populateForm();
  }
  populateForm() {
    this.loyaltyForm.patchValue({
      reason: this.loyalty.reason,
      value: this.loyalty.value
    });
    console.log("TESTING REASON AND VALUE"+this.loyalty.reason+" "+this.loyalty.value);
  }

  onSubmit() {
    if (this.loyaltyForm.valid) {
      const formData = {
        reason: this.loyaltyForm.get('reason')?.value,
        value: this.loyaltyForm.get('value')?.value
      }
      this.loyalty.reason = formData.reason;
      this.loyalty.value = formData.value;
      this.loyaltyService.update(this.loyalty).subscribe((response: any) => {
        console.log(response);
        this.router.navigate([`/admin/loyalty`]);
      }, error => {
        console.error(error);
        this.router.navigate([`/admin/loyalty`]);
      });
    }
  }

}
