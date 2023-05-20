import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = 'http://localhost:8000/api/auth';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  register(name: string, email: string, password: string, role: string, phone: string, photo: string) {
    return this.http.post<any>(this.url + '/register', { name, email, password, role, phone, photo }, this.httpOptions);
  }
}
