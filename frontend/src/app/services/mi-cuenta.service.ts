import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiCuentaService {
  url: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  }

  miCuenta(cuenta: any, id: string) {
    return this.http.put<any>(this.url + '/account/users/'+id, { cuenta, id }, this.httpOptions);
  }
}
