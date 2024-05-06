import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-processexcel',
  templateUrl: './processexcel.component.html',
  styleUrls: ['./processexcel.component.css']
})
export class ProcessexcelComponent {
  apiUrl = 'http://localhost:8084/venture';
  fileSelected = false;
  selectedFile: File | undefined;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = file;
    this.fileSelected = true;
  }

  onSubmit() {
    if (this.selectedFile) {
      this.processExcel(this.selectedFile).subscribe(
          response => {
            // Traitement de la réponse si nécessaire
            console.log('Fichier Excel traité avec succès.', response);
          },
          error => {
            console.error('Erreur lors du traitement du fichier Excel.', error);
          }
      );
    }
  }

  processExcel(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.apiUrl}/processExcel`, formData, {
      reportProgress: true,
      responseType: 'text'
    });
  }
}

