import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Return} from "../Models/return";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReturnService {

  private baseUrl = 'http://localhost:8084/return';

  constructor(private http: HttpClient) { }

  addReturn(returnData: Return): Observable<Return> {
    return this.http.post<Return>(`${this.baseUrl}/add`, returnData);
  }

  updateReturn(returnData: Return): Observable<Return> {
    return this.http.put<Return>(`${this.baseUrl}/update`, returnData);
  }

  deleteReturn(idR: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${idR}`, { responseType: 'text' });
  }

  getReturnById(idR: number): Observable<Return> {
    return this.http.get<Return>(`${this.baseUrl}/get/${idR}`);
  }

  getAllReturn(): Observable<Return[]> {
    return this.http.get<Return[]>(`${this.baseUrl}/getAllReturn`);
  }

  assignReturnToInvestment(idR: number, id: number, loanDuration: number, loanAmount: number, interest: number): Observable<Return> {
    return this.http.put<Return>(`${this.baseUrl}/assignReturnToInvestment/${idR}/${id}?loanDuration=${loanDuration}&loanAmount=${loanAmount}&interest=${interest}`, {});
  }

  calculateMonthlyReturns(loanDuration: number, loanAmount: number, interest: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/calculateMonthlyReturns?loanDuration=${loanDuration}&loanAmount=${loanAmount}&interest=${interest}`);
  }

  addReturnAndAssignToInvestment(id: number, returnData: Return, loanDuration: number, loanAmount: number, interest: number): Observable<Return> {
    return this.http.put<Return>(`${this.baseUrl}/addReturnAndAssignToInvestment/${id}?loanDuration=${loanDuration}&loanAmount=${loanAmount}&interest=${interest}`, returnData);
  }
}
