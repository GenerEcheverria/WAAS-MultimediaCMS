import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'http://localhost:8000/api/account';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  }

  constructor(private http: HttpClient) { }

  getUser(id: string) {
    return this.http.get<any>(this.url + '/users/'+id, this.httpOptions);
  }

  deleteUser(id: string) {
    return this.http.delete<any>(this.url + '/users/'+id, this.httpOptions);
  }
}
