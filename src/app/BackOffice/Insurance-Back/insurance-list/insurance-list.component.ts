import { Component } from '@angular/core';
import { Insurance } from 'src/app/Model/Insurance';
import { InsuranceServicesService } from 'src/app/Service/Insurance/insurance-services.service';
import { InStatus } from 'src/app/Model/Insurance';
@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.css']
})
export class InsuranceListComponent {
  insurances:any[]=[];
  InStatus = InStatus;

  constructor(private insuranceservice:InsuranceServicesService) {

  }
  ngOnInit(){
    this.insuranceservice.findallinsurances().subscribe(insurances=>{
      this.insurances=insurances;
      console.log(insurances);


    });
  }
  getall(){
    this.insuranceservice.findallinsurances().subscribe(insurances=>{
      this.insurances=insurances;
      console.log(insurances);


    });
  }
  ins= new Insurance()
  edit(x:any){
    localStorage.setItem("setobjins",JSON.stringify(x))
this.ins=JSON.parse(String(localStorage.getItem("setobjins")))
console.log(this.ins);

  }
  update(){
    this.insuranceservice.updateins(this.ins).subscribe(data=>{
      console.log(data);
      alert("updated ...")
      this.getall()
    })
  }

  delete(x: number) {
    const index = this.insurances.findIndex(a => a.id === x);
    if (index !== -1) {
      const confirmation = confirm("Are you sure you want to delete this item?");
      if (confirmation) {
        this.insurances.splice(index, 1);
        this.insuranceservice.deleteins(x).subscribe();
      }
    }
  }
  updateInsuranceState(insuranceId: number): void {
    this.insuranceservice.updateInsurance(insuranceId).subscribe(
      (data:any) => {
        // Mettre à jour les données après la mise à jour de l'assurance
        console.log(data);
        this.getall();
/*        this.insuranceservice.findallinsurances().subscribe(
          (insurances: Insurance[]) => {
            this.insurances = insurances;
          },
          (error: any) => {
            console.error('Error fetching insurances:', error);
          }
        );*/
      },
      (error: any) => {
        console.error('Error updating insurance:', error);
      }
    );
  }
  premium:any[]=[]
  getallpr(x:any){
    this.insuranceservice.getallprbyins(x).subscribe(data=>{
      this.premium=data;
      console.log(data);
    });
  }

}
