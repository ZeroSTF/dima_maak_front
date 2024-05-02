import {Component, OnInit} from '@angular/core';
import {VentureService} from "../../Services/venture.service";
import {IStatus, Sector, Stage, Venture, VType} from "../../Models/venture";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-updateventure',
  templateUrl: './updateventure.component.html',
  styleUrls: ['./updateventure.component.css']
})
export class UpdateventureComponent implements OnInit {


    venture: Venture = {
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

    constructor(
        private route: ActivatedRoute,
        private ventureService: VentureService
    ) {
    }

    ngOnInit(): void {
        this.getVentureById();
    }

    getVentureById(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.ventureService.getVentureById(id).subscribe(
                venture => {
                    this.venture = venture;
                },
                error => {
                    console.error('Error fetching venture by ID', error);
                }
            );
        }
    }

    updateVenture(): void {
        if (!this.venture.idV) {
            console.log('Venture ID is not defined.');
            return;
        }

        this.ventureService.updateVenture(this.venture.idV, this.venture).subscribe(
            data => {
                console.log('Venture updated successfully:', data);
            },
            error => {
                console.log('Error updating venture:', error);
            }
        );
    }

}
