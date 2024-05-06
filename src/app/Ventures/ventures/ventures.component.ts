import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { VentureService } from "../../Services/venture.service";
import {IStatus, Sector, Stage, Venture, VType} from "../../Models/venture";
import { FormControl  } from "@angular/forms";
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { VentureAddComponent } from '../venture-add/venture-add.component';
@Component({
  selector: 'app-ventures',
  templateUrl: './ventures.component.html',
  styleUrls: ['./ventures.component.css']
})
export class VenturesComponent implements OnInit {
  @ViewChild(VentureAddComponent, { static: false }) ventureAddComponent!: VentureAddComponent;

  ventures: any[] = [];
  filter = new FormControl('');
    getStatusLabelClass(status: string): string {
        if (status === 'ACTIVE') {
            return 'text-success'; // Classe pour le statut actif (vert)
        } else if (status === 'CLOSED') {
            return 'text-danger'; // Classe pour le statut fermé (rouge)
        } else {
            return ''; // Classe par défaut si le statut n'est pas spécifié
        }
    }



  constructor(private ventureService: VentureService,private router: Router) { }

  ngOnInit(): void {
    this.loadAllVentures();

    // Filtrer les ventures chaque fois que la valeur de filter change
    this.filter.valueChanges.pipe(debounceTime(300)).subscribe(() => {
      this.filterVentures();
    });
  }

  loadAllVentures(): void {
    this.ventureService.getAllVenture().subscribe(
        data => {
          this.ventures = data;
          this.filterVentures(); // Filtrer les données initiales
        },
        error => {
          console.log('Error fetching ventures:', error);
        }
    );
  }

  filterVentures(): void {
    const searchTerm = this.filter.value ? this.filter.value.toLowerCase() : '';
    this.ventures = this.ventures.filter(venture => {
      if (!venture) {
        return false;
      }
      return (
          (venture.companyName && venture.companyName.toLowerCase().includes(searchTerm)) ||
          (venture.ventureName && venture.ventureName.toLowerCase().includes(searchTerm)) ||
          (venture.description && venture.description.toLowerCase().includes(searchTerm))
      );
    });
  }
  deleteVenture(id: number): void {
    this.ventureService.deleteVenture(id).subscribe(
        data => {
          console.log('Venture deleted:', data);
          this.loadAllVentures(); // Rechargez la liste des Ventures après la suppression
        },
        error => {
          console.log('Error deleting venture:', error);
        }
    );
  }


  deleteExpiredVentures(): void {
    this.ventureService.deleteExpiredVentures().subscribe(
        data => {
          if (data) {
            console.log('Expired ventures deleted successfully:', data);
            this.loadAllVentures(); // Rechargez la liste des Ventures après la suppression
          } else {
            console.log('No expired ventures to delete.');
          }
        },
        error => {
          console.log('Error deleting expired ventures:', error);
        }
    );
  }

    newVenture: Venture = {
        idV: 0,
        companyName: '',
        ventureName: '',
        ventureType: VType.PubliclyShares, // Vous pouvez choisir un type par défaut
        description: '',
        stage: Stage.STARTUP, // Vous pouvez choisir un stage par défaut
        sector: Sector.AGRICULTURE, // Vous pouvez choisir un secteur par défaut
        availableShares: 0,
        sharesPrice: 0,
        dateExp: '', // Vous pouvez initialiser avec la date actuelle si nécessaire
        status: IStatus.ACTIVE, // Vous pouvez choisir un statut par défaut
        loanAmount: 0,
        interest: 0,
        loanDuration: 0,
        dividendPerShare: 0,
        details: '',
        investments: [] // Si vous n'avez pas de valeur par défaut, initialiser avec un tableau vide
    };


}
