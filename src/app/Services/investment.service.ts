import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Investment} from "../Models/investment";

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private apiUrl = 'http://localhost:8084/investment';

  constructor(private http: HttpClient) { }
  addInvestment(investment: Investment): Observable<Investment> {
    return this.http.post<Investment>(`${this.apiUrl}/add`, investment);
  }


  addAndDoInvestment(investment: any, idV: number): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/AddAndDoInvestment/${idV}`, investment);
  }


  getAllInvestment(): Observable<Investment[]> {
    return this.http.get<Investment[]>(`${this.apiUrl}/getAllInvestment`);
  }



  getInvestmentById(id: string): Observable<Investment> {
    return this.http.get<Investment>(`${this.apiUrl}/get/${id}`);
  }


  deleteInvestment(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }


}
