import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  url: string = 'http://localhost:8000/api';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  }

  constructor(private http: HttpClient) { }
  
  getSite(id: string) {
    return this.http.get<any>(this.url + '/media/site/'+id, {});
  }

  getSiteIdbyUrl(url: string) {
    return this.http.get<any>(this.url + '/media/id/'+url, {});
  }

  getSitesForUser(id: string){
    return this.http.get<any>(this.url + '/media/userSites/'+id, this.httpOptions);
  }
}
