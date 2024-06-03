import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssetService } from 'src/app/Service/asset.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit{
  constructor(private dataService:AssetService ,private Activated:ActivatedRoute){}
  id:any
  ngOnInit(): void {
    this.Activated.paramMap.forEach(a=>{
      this.id=a.get("id")
    })
  }
  add(type:string){
    this.dataService.updatedemande(type,this.id).subscribe(data=>{
      console.log(data);
      alert("added successuffly ...")
      
      
    })
    }
}
