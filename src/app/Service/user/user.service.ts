import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: String = 'http://localhost:8080/user/'
  constructor(private http: HttpClient) {}
  findAllUsers(){
    return this.http.get(this.baseUrl + 'getAll')
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
  uploadPhoto(requestBody: any, id:String) {
    return this.http.post(this.baseUrl +`upload/${id}`, requestBody)
  }
  update(requestBody: any) {
    return this.http.put(this.baseUrl+'update',requestBody)
  }
  delete(id:String){
    return this.http.get(this.baseUrl+`delete/${id}`);
  }
  add(requestBody:any){
    return this.http.post(this.baseUrl+'add',requestBody);
  }
}
