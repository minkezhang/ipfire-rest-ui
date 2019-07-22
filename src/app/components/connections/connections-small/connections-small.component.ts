import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Connection } from '../../../models/connection';
import { IpFireService } from '../../../services/ipfire.service';

@Component({
  selector: 'app-connections-small',
  templateUrl: './connections-small.component.html',
  styleUrls: ['./connections-small.component.scss']
})
export class ConnectionsSmallComponent implements OnInit {

  public connections: Observable<Connection[]>;

  constructor(private ipfire: IpFireService) {
    this.connections = this.ipfire.getStatus('connection').pipe(
      map((status: Connection[]): Connection[] => status));
  }

  ngOnInit() { }
}
