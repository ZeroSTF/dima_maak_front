import {Component, OnInit} from '@angular/core';
import {INStatus, Investment} from "../../Models/investment";
import {InvestmentService} from "../../Services/investment.service";
import {Venture} from "../../Models/venture";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-investmentform',
  templateUrl: './investmentform.component.html',
  styleUrls: ['./investmentform.component.css']
})
export class InvestmentformComponent implements OnInit{
  newI: Investment = {
    id: 0,
    date: '',
    purchasedShares: 0,
    amount: 0,
    totalInvestment: 0,
    status: INStatus.ACTIVE,
    idV: 0 // Ajout de la propriété ventureIdv avec une valeur initiale
  };
  selectedVenture: Venture | undefined; // Stockez les détails du Venture sélectionné

  constructor(private investmentService: InvestmentService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérez les détails du Venture à partir de la route
    this.route.params.subscribe(params => {
      this.selectedVenture = {
        idV: +params['idV'],
        // Ajoutez d'autres propriétés du Venture ici si nécessaire
      };
      this.newI.idV = this.selectedVenture.idV; // Utilisez l'ID du Venture sélectionné
    });
  }


  onSubmit(): void {
    if (this.newI && this.newI.idV !== undefined) { // Assurez-vous que newI et idV sont définis
      this.investmentService.addAndDoInvestment(this.newI, this.newI.idV).subscribe(
          response => {
            console.log('Investment added and allocated successfully:', response);
            // Réinitialisez les valeurs de newI ici si nécessaire
            this.newI = {
              id: 0,
              date: '',
              purchasedShares: 0,
              amount: 0,
              totalInvestment: 0,
              status: INStatus.ACTIVE,
              venture: {} as Venture,

              idV: 0 // Réinitialisez la valeur de ventureIdv
            };
          },
          error => {
            console.error('Error adding investment:', error);
            // Gérer les erreurs ici
          }
      );
    }
  }
}
