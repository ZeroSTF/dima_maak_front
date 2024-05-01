import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {User} from "../../Model/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: String = 'http://localhost:8080/user/'

  constructor(private http: HttpClient) {
  }

  findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'getAll')
  }

  getUser(id: String) {
    return this.http.get(this.baseUrl + `get/${id}`);
  }

  getProfile() {
    return this.http.get(this.baseUrl + `current`);
  }

  getPhoto(photo: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}getPhoto/${photo}`, {responseType: 'blob'});
  }

  uploadPhoto(requestBody: any) {
    return this.http.post(this.baseUrl + 'upload', requestBody)
  }

  updateProfile(requestBody: any) {
    return this.http.put(this.baseUrl+'update',requestBody)
  }
}
