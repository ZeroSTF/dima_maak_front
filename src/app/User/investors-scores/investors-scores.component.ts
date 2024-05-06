import {Component, OnInit} from '@angular/core';
import {InvestmentService, UserScore} from "../../Services/investment.service";

@Component({
  selector: 'app-investors-scores',
  templateUrl: './investors-scores.component.html',
  styleUrls: ['./investors-scores.component.css']
})
export class InvestorsScoresComponent implements OnInit {
  scores: UserScore[] = [];


  constructor(private investmentService: InvestmentService) {}

  ngOnInit() {
    this.getUserScores();
  }

  getUserScores(): void {
    this.investmentService.getUserScores().subscribe(
        scores => this.scores = scores,
        error => console.error('Error fetching scores', error)
    );
  }
}
