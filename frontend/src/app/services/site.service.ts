import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  url: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }
  
  getSite(id: string) {
    return this.http.get<any>(this.url + '/media/site/'+id, {});
  }
}
