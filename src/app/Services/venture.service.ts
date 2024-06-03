import { Injectable } from '@angular/core';
import {Venture} from "../Models/venture";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VentureService {

  private apiUrl = 'http://localhost:8084/venture';

  constructor(private http: HttpClient) { }

  getAllVenture(): Observable<Venture[]> {
    return this.http.get<Venture[]>(`${this.apiUrl}/getAllVenture`);
  }

  getVentureById(id: string): Observable<Venture> {
    return this.http.get<Venture>(`${this.apiUrl}/get/${id}`);
  }

  addVenture(venture: Venture): Observable<Venture> {
    return this.http.post<Venture>(`${this.apiUrl}/add`, venture);
  }

  updateVenture(idV: number, venture: Venture): Observable<Venture> {
    return this.http.put<Venture>(`${this.apiUrl}/update/${idV}`, venture);
  }



  deleteVenture(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  updateVentureStatus(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/updateStatus`, null);
  }

  processExcel(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.apiUrl}/processExcel`, formData, {
      reportProgress: true,
      responseType: 'text'
    });
  }

  updateAllVentureStatus(): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiUrl}/updateAllStatus`, null);
  }

  deleteExpiredVentures(): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/deleteExpired`);
  }



}
