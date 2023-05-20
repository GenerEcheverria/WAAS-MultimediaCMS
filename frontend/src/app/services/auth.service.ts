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

  login(email: string, password: string) {
    return this.http.post<any>(this.url + '/login', { email, password });
  }

  logout() {
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.post<any>(this.url + '/logout', {},httpOptions);
  }

  //Recuperar token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    const token = this.getToken();
    if (token) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`
        })
      };
      return this.http.get<any>(this.url + `/check`, httpOptions);
    }
    return of({ valid: false });
  }

}
