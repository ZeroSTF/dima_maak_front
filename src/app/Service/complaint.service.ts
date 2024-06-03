import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Complaint } from '../Model/Complaint';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  private baseUrl = 'http://localhost:8085/complaint'; // URL de mon backend Spring
  private evaluateUrl = `${this.baseUrl}/evaluate`;

  constructor(private http: HttpClient) { }

  addComplaint(complaint: Complaint): Observable<any> {
    return this.http.post(`${this.baseUrl}/save`, complaint);
  }

  updateComplaint(complaint: Complaint): Observable<any> {
    return this.http.put(`${this.baseUrl}/update`, complaint);
  }

  getComplaint(id: number): Observable<Complaint> {
    return this.http.get<Complaint>(`${this.baseUrl}/get/${id}`);
  }

  deleteComplaint(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/delete/${id}`);
  }

  getAllComplaints(): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(`${this.baseUrl}/all`);
  }

  evaluateComplaint(complaint: string): Observable<string> {
    return this.http.post<string>(this.evaluateUrl, complaint);
  }
}
