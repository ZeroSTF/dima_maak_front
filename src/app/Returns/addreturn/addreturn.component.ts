import { Component } from '@angular/core';
import {Return, RType} from "../../Models/return";
import {Observable} from "rxjs";
import {ReturnService} from "../../Services/return.service";

@Component({
  selector: 'app-addreturn',
  templateUrl: './addreturn.component.html',
  styleUrls: ['./addreturn.component.css']
})
export class AddreturnComponent {
  newReturn: Return = {
    rDate: '',
    returnType: RType.DIVIDEND,
    returnAmount: 0,
    returnInterest: 0,
    sharesGain: 0,
  };
  loanDuration: number = 0;
  loanAmount: number = 0;
  interest: number = 0;
  investment?: number;  // The ID of the investment to which the return will be assigned

  constructor(private returnService: ReturnService) {}

  onSubmit(): void {
    if (this.investment) {
      this.returnService.addReturnAndAssignToInvestment(this.investment, this.newReturn, this.loanDuration, this.loanAmount, this.interest).subscribe(
          response => {
            console.log('Return added and assigned successfully', response);
            // Optionally reset newReturn and other properties here
          },
          error => {
            console.error('Error adding and assigning return', error);
          }
      );
    } else {
      alert('Investment ID is required.');
    }
  }
}
