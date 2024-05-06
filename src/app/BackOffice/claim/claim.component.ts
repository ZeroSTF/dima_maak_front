import { Component, OnInit } from '@angular/core';
import { InsuranceServicesService } from 'src/app/Service/Insurance/insurance-services.service';
export class Claim {
  id!:number
  date!: Date;
  image!: string;
  details!: string;
  amount!: number;
  status!: string;}
@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit{
  constructor(private insuranceservice:InsuranceServicesService) {

  }
ngOnInit(): void {
  this.getall()
}
getall(){
  this.insuranceservice.getallclaim().subscribe(data=>{
    this.liste=data
  })
}
claim = new Claim()
copy(x:any){
  localStorage.setItem("copy",JSON.stringify(x))
  this.claim=JSON.parse(String(localStorage.getItem("copy")))
}
update(){
  this.insuranceservice.update(this.claim).subscribe(data=>{
    console.log(data);
    alert("updated ...")
    this.getall()
  }

  )
}
liste:any[]=[]
delete(x: number) {
  const index = this.liste.findIndex(a => a.id === x);
  if (index !== -1) {
    const confirmation = confirm("Are you sure you want to delete this item?");
    if (confirmation) {
      this.liste.splice(index, 1);
      this.insuranceservice.delete(x).subscribe();
    } 
  }
}
}
