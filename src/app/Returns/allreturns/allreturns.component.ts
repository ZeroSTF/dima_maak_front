import {Component, OnInit} from '@angular/core';
import {ReturnService} from "../../Services/return.service";
import {Router} from "@angular/router";
import {debounceTime} from "rxjs/operators";
import {Return, RType} from "../../Models/return";
import {FormControl} from "@angular/forms";
import {Investment} from "../../Models/investment";

@Component({
  selector: 'app-allreturns',
  templateUrl: './allreturns.component.html',
  styleUrls: ['./allreturns.component.css']
})
export class AllreturnsComponent implements OnInit{



  returns: any[] = [];
  filter = new FormControl('');



  constructor(private returnService: ReturnService,private router: Router) { }

  ngOnInit(): void {
    this.loadAllReturns();

    // Filtrer les returns chaque fois que la valeur de filter change
    this.filter.valueChanges.pipe(debounceTime(300)).subscribe(() => {
      this.filterReturns();
    });
  }

  loadAllReturns(): void {
    this.returnService.getAllReturn().subscribe(
        data => {
          this.returns = data;
          this.filterReturns(); // Filtrer les données initiales
        },
        error => {
          console.log('Error fetching returns:', error);
        }
    );
  }

  filterReturns(): void {
    const searchTerm = this.filter.value ? this.filter.value.toLowerCase() : '';
    this.returns = this.returns.filter(ret => {
      if (!ret) {
        return false;
      }
      return (
          (ret.rDate && ret.rDate.toLowerCase().includes(searchTerm)) ||
          (ret.returnType && ret.returnType.toLowerCase().includes(searchTerm)) ||
          (ret.returnAmount && ret.returnAmount.toLowerCase().includes(searchTerm))
      );
    });
  }


  deleteReturn(id: number): void {
    this.returnService.deleteReturn(id).subscribe(
        data => {
          console.log('Return deleted:', data);
          this.loadAllReturns(); // Rechargez la liste des Ventures après la suppression
        },
        error => {
          console.log('Error deleting venture:', error);
        }
    );
  }


  newReturn: Return = {
    idR: 0,
    rDate: '',
    returnType: RType.DIVIDEND,
    returnAmount: 0, // Vous pouvez choisir un type par défaut
    returnInterest: 0,
    sharesGain: 0, // Vous pouvez choisir un stage par défaut
    investment: {} as Investment
  };


}

