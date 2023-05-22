import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { saUsuarios } from '../interfaces/saUsuarios';

@Injectable({
  providedIn: 'root'
})
export class SasitiosService {
  url: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  }

  getUsuarios(){
    return this.http.get<saUsuarios[]>(this.url + '/account/sausers', this.httpOptions);
  }
  
}
