import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsurancePack } from 'src/app/Model/InsurancePack';

@Injectable({
  providedIn: 'root'
})
export class InsurancePackServiceService {
  private baseUrl :string='http://localhost:8080/InsuranceP/';

  constructor(private http:HttpClient) { }
  findallinsurancepacks():Observable<any>
  {
    return this.http.get('http://localhost:8080/InsuranceP/all');
  }
  
}
