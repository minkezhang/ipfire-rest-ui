import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Config } from '../models/config';


@Injectable({
  providedIn: 'root'
})
export class IPFireService {
  constructor(private http: HttpClient) {}
        
  getConfig(component: string): Observable<Config> {
    return this.http.get<Config>(
        `${environment.API_URL}/api/rest/component/${component}/config`);
  }
}
