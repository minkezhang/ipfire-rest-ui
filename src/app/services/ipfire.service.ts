import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { SshConfig } from '../models/ssh-config';
import { Config } from '../models/config';
import { Status } from '../models/status';
import { IPLease } from '../models/lease';


@Injectable({
  providedIn: 'root'
})
export class IPFireService {
  constructor(private http: HttpClient) {}

  getDHCPLeases(): Observable<IPLease[]> {
    return this.http.get(
      `${environment.API_URL}/api/rest/component/dhcp/status`).pipe(
      map((data): IPLease[] => data['dynamic']));
  }

  getConfig(component: string): Observable<SshConfig> {
    return this.http.get<SshConfig>(
        `${environment.API_URL}/api/rest/component/${component}/config`);
  }

  getStatus(component: string): Observable<Status> {
    return this.http.get<Status>(
        `${environment.API_URL}/api/rest/component/${component}/status`);
  }
}
