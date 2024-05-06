import {Component} from '@angular/core';
import {VentureService} from "../../Services/venture.service";
import {IStatus, Sector, Stage, Venture, VType} from "../../Models/venture";
import {Observable} from 'rxjs';

@Component({
  selector: 'app-venture-add',
  templateUrl: './venture-add.component.html',
  styleUrls: ['./venture-add.component.css']
})
export class VentureAddComponent   {

  newV: Venture = {
    companyName: '',
    ventureName: '',
    ventureType: VType.LoanOffre,
    description: '',
    stage: Stage.GROWTH,
    sector: Sector.AGRICULTURE,
    availableShares: 0,
    sharesPrice: 0,
    dateExp: '',
    status: IStatus.ACTIVE,
    loanAmount: 0,
    interest: 0,
    loanDuration: 0,
    dividendPerShare: 0
  };

  constructor(private ventureService: VentureService) {}

  onSubmit(): void {
    if (this.newV) {
      this.addVenture(this.newV).subscribe(
          response => {
            console.log('Venture added successfully', response);
            // Réinitialisez les valeurs de newV ici si nécessaire
            this.newV = {
              companyName: '',
              ventureName: '',
              ventureType: VType.LoanOffre,
              description: '',
              stage: Stage.GROWTH,
              sector: Sector.AGRICULTURE,
              availableShares: 0,
              sharesPrice: 0,
              dateExp: '',
              status: IStatus.ACTIVE,
              loanAmount: 0,
              interest: 0,
              loanDuration: 0,
              dividendPerShare: 0
            };
          },
          error => {
            console.error('Error adding venture', error);
          }
      );
    }
  }

  addVenture(venture: Venture): Observable<Venture> {
    return this.ventureService.addVenture(venture);
  }
}
