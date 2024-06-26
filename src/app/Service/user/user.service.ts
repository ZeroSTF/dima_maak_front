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
    return this.http.delete(this.baseUrl+`delete/${id}`);
  }
  add(requestBody:any){
    return this.http.post(this.baseUrl+'add',requestBody);
  }
  assessRisk(id:String){
    return this.http.get(this.baseUrl+`assess/${id}`,{responseType: 'text'});
  }
  generateAffiliate(){
    return this.http.get(this.baseUrl+`generateAffiliateLink`,{responseType: 'text'});
  }
  //user statistics by salary
  countUsers(){
    return this.http.get(this.baseUrl+`countUsers`);
  }
  //user statistics by age
  countUsersByAge(){
    return this.http.get(this.baseUrl+`countUsersByAge`);
  }
  //user statistics by location
  countUsersByLocation(){
    return this.http.get(this.baseUrl+`findAllUserCoordinates`);
  }
}
