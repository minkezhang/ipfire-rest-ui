import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Config } from '../models/config';
import { Status } from '../models/status';
import { DhcpStatus, DynamicLease, FixedLease } from '../models/dhcp-status';
import { ApiVersion } from '../models/api-version';
import { Data } from '../models/data';


@Injectable({
  providedIn: 'root'
})
export class IpFireService {
  constructor(private http: HttpClient) {}

  getFixedLeases(): Observable<FixedLease[]> {
    return this.http.get<DhcpStatus>(
      `${environment.API_URL}/api/rest/component/dhcp/status`).pipe(
      map((data: DhcpStatus): FixedLease[] => data.fixed));
  }

  getDhcpLeases(): Observable<DynamicLease[]> {
    return this.http.get<DhcpStatus>(
      `${environment.API_URL}/api/rest/component/dhcp/status`).pipe(
      map((data: DhcpStatus): DynamicLease[] => data.dynamic));
  }

  getApiVersion(): Observable<ApiVersion[]> {
    return this.http.get<ApiVersion[]>(
      `${environment.API_URL}/api/rest/version/`);
  }

  getData(subpath: string): Observable<Data> {
    return this.http.get<Data>(
      `${environment.API_URL}/api/rest/data/${subpath}/`);
  }

  getConfig(component: string): Observable<Config> {
    return this.http.get<Config>(
      `${environment.API_URL}/api/rest/component/${component}/config/`);
  }

  getStatus(component: string): Observable<Status> {
    return this.http.get<Status>(
      `${environment.API_URL}/api/rest/component/${component}/status/`);
  }
}
