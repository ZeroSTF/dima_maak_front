import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoyaltyService {
  private baseUrl: String = 'http://localhost:8080/loyalty/'

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.baseUrl+'getAll');
  }

  getLoyalty(id:any){
    return this.http.get(this.baseUrl+'get/'+id);
  }
  delete(id:String){
    return this.http.delete(this.baseUrl+`delete/${id}`);
  }
  update(requestBody: any){
    return this.http.put(this.baseUrl+'update',requestBody);
  }
  add(requestBody:any){
    return this.http.post(this.baseUrl+'add',requestBody);
  }

}
