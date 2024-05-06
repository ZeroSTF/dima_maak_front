import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoyaltyService} from "../../../Service/user/loyalty.service";
import {UserService} from "../../../Service/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-loyalty',
  templateUrl: './add-loyalty.component.html',
  styleUrls: ['./add-loyalty.component.css']
})
export class AddLoyaltyComponent implements OnInit{
  loyaltyForm: FormGroup;
  loyalty:any;
  users:any;
  constructor(private loyaltyService:LoyaltyService, private userService:UserService, private router:Router, private fb:FormBuilder) {
    this.loyaltyForm = this.fb.group({
      reason: [''],
      value: [''],
      user: ['']
    });
  }
  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers(){
    this.userService.findAllUsers().subscribe(users=>{
      this.users=users;
    });
  }
  onSubmit() {
    if (this.loyaltyForm.valid) {
      const formData = {
        reason: this.loyaltyForm.get('reason')?.value,
        value: this.loyaltyForm.get('value')?.value,
        user:this.loyaltyForm.get('user')?.value
      }
      this.loyalty={};
      this.loyalty.user={};
      this.loyalty.reason = formData.reason;
      this.loyalty.value = formData.value;
      this.loyalty.user.id=formData.user;
      console.log(this.loyalty.user.id+" "+this.loyalty.reason+" "+this.loyalty.value);
      this.loyaltyService.add(this.loyalty).subscribe((response: any) => {
        console.log(response);
        this.router.navigate([`/admin/loyalty`]);
      }, error => {
        console.error(error);
        this.router.navigate([`/admin/loyalty`]);
      });
    }
  }

}
