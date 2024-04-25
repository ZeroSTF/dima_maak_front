import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../Model/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseUrl:String = 'http://localhost:8080/user/'
  constructor(private http:HttpClient) { }

  findAllUsers(): Observable<User[]>{
  return this.http.get<User[]>(this.baseUrl+'getAll')
  }
}
