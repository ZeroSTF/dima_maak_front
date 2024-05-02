import {Component, OnInit} from '@angular/core';
import {INStatus, Investment} from "../../Models/investment";
import {InvestmentService} from "../../Services/investment.service";
import { FormControl  } from "@angular/forms";
import {Venture} from "../../Models/venture";
import {User} from "../../Models/user";

@Component({
  selector: 'app-allinvestments',
  templateUrl: './allinvestments.component.html',
  styleUrls: ['./allinvestments.component.css']
})
export class AllinvestmentsComponent implements OnInit{
  investments: Investment[] = [];

  constructor(private investmentService: InvestmentService) { }

  ngOnInit(): void {
    this.loadInvestments();
  }
  deleteInvestment(id: number): void {
    this.investmentService.deleteInvestment(id).subscribe(
        () => {
          console.log('Investment deleted successfully');
          this.loadInvestments(); // Rechargez la liste des Investments après la suppression
        },
        error => {
          console.log('Error deleting investment:', error);
        }
    );
  }

  loadInvestments(): void {
    this.investmentService.getAllInvestment().subscribe(
        data => {
          this.investments = data;
        },
        error => {
          console.log('Error loading investments:', error);
        }
    );
  }

  /*newI: Investment = {
    id:0,
    date: '',
    purchasedShares: 0,
    amount: 0,
    totalInvestment: 0,
    status: INStatus.ACTIVE,
    ventureIdv: 0 ,
    user: {} as User
  };*/
}
