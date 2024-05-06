import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Insurance } from 'src/app/Model/Insurance';

@Injectable({
  providedIn: 'root'
})
export class InsuranceServicesService {

  private baseUrl :string='http://localhost:8080/Insurance/';
islogin=false
  constructor(private http:HttpClient) { }
  findallinsurances():Observable<any>
  {
    return this.http.get(this.baseUrl+'all');
  }
  findallibyuser(iduser:number):Observable<any>
  {
    return this.http.get(this.baseUrl+'allbyuser?iduser='+iduser);
  }
  login(email:string,password:string){
    return this.http.post(this.baseUrl+"login?email="+email+"&password="+password, {});
  }
  updateInsurance(insuranceId: number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}updatedinc/${insuranceId}`, {});
  }
  addins(insuranceId: number,iduser:number): Observable<any> {
    return this.http.post("http://localhost:8080/Insurance/savepackanduser/"+insuranceId+"/"+iduser, {});
  }
  /// pack
  findallinsurancepacks():Observable<any>
  {
    return this.http.get('http://localhost:8080/InsuranceP/all');
  }
  add(ng:NgForm):Observable<any>{
    return this.http.post("http://localhost:8080/InsuranceP/save",ng)
  }
  deletepack(id:number):Observable<any>{
    return this.http.delete("http://localhost:8080/InsuranceP/deleteinsurancep/"+id)
  }
  updatepack(obj:any):Observable<any>{
    return this.http.put("http://localhost:8080/InsuranceP/updateinsurancep",obj)
  }
  deleteins(obj:any):Observable<any>{
    return this.http.delete("http://localhost:8080/Insurance/deleteinsurance/"+obj)
  }
  updateins(obj:any):Observable<any>{
    return this.http.put("http://localhost:8080/Insurance/updateinsurance",obj)
  }
  addclaim(obj:any,id:number):Observable<any>{
    return this.http.post("http://localhost:8080/Claim/addclaimandassigntoinsurance/"+id,obj)
  }
  getallpr():Observable<any>{
    return this.http.get("http://localhost:8080/Premium/all")
  }
  getallprbyins(id:number):Observable<any>{
    return this.http.get("http://localhost:8080/Premium/allpr?id="+id)
  }
  getallclaim():Observable<any>{
    return this.http.get("http://localhost:8080/Claim/all")
  }
  update(ng:any):Observable<any>{
    return this.http.put("http://localhost:8080/Claim/updateclaim",ng)
  }
  delete(x:number):Observable<any>{
    return this.http.delete("http://localhost:8080/Claim/deleteclaim/"+x)
  }
}
