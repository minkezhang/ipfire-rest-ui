import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Config } from '../models/config';
import { Status } from '../models/status';
import { DhcpStatus, DynamicLease, FixedLease } from '../models/dhcp-status';
import { ApiVersion } from '../models/api-version';
import { Data } from '../models/data';


let buildUrl = (subpath: string): string => {
  return `${environment.api_root.url}/${subpath}/${environment.api_root.demo ? "data.json" : ""}`
}

@Injectable({
  providedIn: 'root'
})
export class IpFireService {
  constructor(private http: HttpClient) {}

  getApiVersion(): Observable<ApiVersion[]> {
    return this.http.get<ApiVersion[]>(
      buildUrl('api/rest/version'));
  }

  getData(subpath: string): Observable<Data> {
    return this.http.get<Data>(buildUrl(`api/rest/data/${subpath}`));
  }

  getConfig(component: string): Observable<Config> {
    return this.http.get<Config>(buildUrl(`api/rest/component/${component}/config`));
  }

  getStatus(component: string): Observable<Status> {
    return this.http.get<Status>(buildUrl(`api/rest/component/${component}/status`));
  }
}
