import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';
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

  addInvestmentAndAssignToVentureAndUser(investment: any, ventureId: number, userId: number): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.apiUrl}/addInvestmentAndAssignToVentureAndUser?ventureId=${ventureId}&userId=${userId}`, investment, { headers });
  }

  getUserScores(): Observable<UserScore[]> {
    return this.http.get<UserScore[]>(this.apiUrl)
        .pipe(
            catchError(this.handleError<UserScore[]>('getUserScores', []))
        );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

export interface UserScore {
  userId: number;
  score: number;
  // Define other properties based on your API response
}



