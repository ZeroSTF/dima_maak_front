import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private baseUrl:String = 'http://localhost:8080/notification/'
  constructor(private http:HttpClient) {
  }
  getUnread() {
    return this.http.get(this.baseUrl+`getUnread`) ;
  }
}
