import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Investment, INStatus } from '../../Models/investment';
import { User, Role, UStatus } from '../../Models/user';
import { InvestmentService } from '../../Services/investment.service';

@Component({
  selector: 'app-investmentform',
  templateUrl: './investmentform.component.html',
  styleUrls: ['./investmentform.component.css']
})
export class InvestmentformComponent implements OnInit {
  newI: Investment = {
    id: 0,
    date: '',
    purchasedShares: 0,
    amount: 0,
    totalInvestment: 0,
    status: INStatus.ACTIVE,
    idV: 0,
  };

  newUser: User = {
    id: 0,
    cin: 0,
    name: '',
    surname: '',
    email: '',
    password: '',
    salary: 0,
    job: '',
    photo: '',
    balance: 0,
    rib: 0,
    role: Role.Investor,
    status: UStatus.ACTIVE,
    lp: 0,
    investments: []
  };

  constructor(private investmentService: InvestmentService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.newI.idV = params['idV'] ? +params['idV'] : undefined; // Use undefined here
    });
  }

  onSubmit(): void {
    if (this.newI.idV && this.newUser.id) {
      this.investmentService.addInvestmentAndAssignToVentureAndUser(this.newI, this.newI.idV, this.newUser.id).subscribe(
          response => {
            console.log('Investment added and allocated successfully:', response);
            // Optionally reset newI here if necessary
          },
          error => {
            console.error('Error adding investment:', error);
            alert('Failed to add investment: ' + (error.error?.message || 'Server error'));
          }
      );
    } else {
      alert('Missing required fields. Please check your inputs.');
    }
  }
}
