import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../Models/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private baseUrl = 'http://localhost:8084/user'; // Remplacez ceci par l'URL de base de votre API

  constructor(private http: HttpClient) { }

  retrieveAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/retrieve-all-users`);
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/retrieve-user/${userId}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/add-user`, user);
  }

  removeUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/remove-user/${userId}`);
  }

  modifyUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/modify-user`, user);
  }

  updateBalance(userId: number, returnAmount: number, returnInterest: number, sharesGain: number, totalInvestment: number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/users/${userId}/updateBalance`, null, {
      params: {
        returnAmount: returnAmount.toString(),
        returnInterest: returnInterest.toString(),
        sharesGain: sharesGain.toString(),
        totalInvestment: totalInvestment.toString()
      }
    });
  }

}
