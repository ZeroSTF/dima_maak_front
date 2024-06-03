import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
   baseUrl = 'http://localhost:8080/assets'
  constructor(private http:HttpClient) { }
  // assets
  asset(a:any):Observable<any>{
    return this.http.post(this.baseUrl+"/save?adsImages&id="+1,a)
  }
  updateasset(a:any,idasset:number):Observable<any>{
    return this.http.put(this.baseUrl+"/update?idasset="+idasset,a)
  }
  deleteasset(idasset:number):Observable<any>{
    return this.http.delete(this.baseUrl+"/delete/"+idasset)
  }
  getasset():Observable<any>{
    return this.http.get(this.baseUrl)
  }
  // leasing
  addleasing(nf:NgForm,id:number):Observable<any>{
    return this.http.post("http://localhost:8080/leasings/add?iduser="+1+"&iddemende="+id,nf);
  }
  getall(id:number):Observable<any>{
    return this.http.get("http://localhost:8080/leasings/getbydemande?id="+id);
  }
  deleteleasing(id:any):Observable<any>{
    return this.http.delete("http://localhost:8080/leasings/"+id);
  }
  updateleasing(id:any,ng:any):Observable<any>{
    return this.http.put("http://localhost:8080/leasings/update?id="+id,ng);
  }
  //user
  login(email:string,password:string): Observable<any> {
    return this.http.post("http://localhost:8080/leasings/login?email="+email+"&password="+password,{email,password},{responseType:"text"});
  }
  // demande
  adddemande(ng:any,id:number,idasset:number): Observable<any> {
    return this.http.post('http://localhost:8080/demande/save?id='+id+"&idasset="+idasset,ng);
  }
  getalld(): Observable<any> {
    return this.http.get('http://localhost:8080/demande');
  }
  updatedemande(ng:any,id:number): Observable<any> {
    return this.http.post('http://localhost:8080/demande/status?status='+ng+"&iddemende="+id,ng);
  }
  getassetofdemande(id:number): Observable<any> {
    return this.http.get('http://localhost:8080/demande/getassetofdemande?iddemende='+id);
  }
  getuserofdemande(id:number): Observable<any> {
    return this.http.get('http://localhost:8080/demande/getuserofdemande?iddemende='+id);
  }
  //post
  addpost (ng:NgForm):Observable<any>{
     return this.http.post("http://localhost:8080/post/save",ng,{responseType:"text"})
  }
  getallpost ():Observable<any>{
    return this.http.get("http://localhost:8080/post/all")
 }

}
