import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { CrearSitio } from '../interfaces/crear-sitio';

@Injectable({
  providedIn: 'root'
})
export class CrearSitioService {
  url: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  }

  crearSitio(newCreatSite: CrearSitio) {
    return this.http.post<any>(this.url + '/media/sites', { newCreatSite }, this.httpOptions);
  }
}
