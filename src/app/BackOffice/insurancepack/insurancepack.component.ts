import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InStatus, Insurance } from 'src/app/Model/Insurance';
import { InsurancePack } from 'src/app/Model/InsurancePack';
import { InsuranceServicesService } from 'src/app/Service/Insurance/insurance-services.service';

@Component({
  selector: 'app-insurancepack',
  templateUrl: './insurancepack.component.html',
  styleUrls: ['./insurancepack.component.css']
})
export class InsurancepackComponent {
  insurances:any[]=[];
  InStatus = InStatus;
  
  constructor(private insuranceservice:InsuranceServicesService) {

  }
  ngOnInit(){
    this.insuranceservice.findallinsurances().subscribe(data=>{
      this.insurances=data;
      console.log(data);
      
    });
    this.getpack()
  }
  send(ng:NgForm){
   this.insuranceservice.add(ng.value).subscribe(data=>{
    console.log(data);
    alert("added successfully")
    this.getpack()
   }) 
  }
  delete(x: number) {
    const index = this.insurances.findIndex(a => a.id === x);
    if (index !== -1) {
      const confirmation = confirm("Are you sure you want to delete this item?");
      if (confirmation) {
        this.insurances.splice(index, 1);
        this.insuranceservice.deletepack(x).subscribe();
      } 
    }
  }
  ins = new InsurancePack()
  edit(x:any){
    localStorage.setItem("objins",JSON.stringify(x))
    this.ins=JSON.parse(String(localStorage.getItem("objins")))
    console.log(this.ins);
    
  }
  updated(){
    this.insuranceservice.updatepack(this.ins).subscribe(data=>{
      console.log(data);
      alert("updated ...")
      this.getpack()
      
    })
  }
  updateInsuranceState(insuranceId: number): void {
    this.insuranceservice.updateInsurance(insuranceId).subscribe(
      () => {
        // Mettre à jour les données après la mise à jour de l'assurance
        this.insuranceservice.findallinsurances().subscribe(
          (insurances: Insurance[]) => {
            this.insurances = insurances;
            this.getpack()
            alert("updated ....")
          },
          (error: any) => {
            console.error('Error fetching insurances:', error);
          }
        );
      },
      (error: any) => {
        console.error('Error updating insurance:', error);
      }
    );
  }
getpack(){
  this.insuranceservice.findallinsurancepacks().subscribe(data=>{
    this.insurances=data
  })
}
}
