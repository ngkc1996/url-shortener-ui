import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {

  constructor(
    private http: HttpClient
  ) { }

  getUrl(url: string): Observable<any> {
    let data = {
      'url': url
    };
    const APIEndpoint = environment.APIEndpoint;
    return this.http.post(APIEndpoint, data);
  }
}
