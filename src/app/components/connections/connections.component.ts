import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IpFireService } from '../../services/ipfire.service';
import { Connection } from '../../models/connection';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent implements OnInit {

  public connections: Observable<Connection[]>;

  columns: string[] = [
    'l4_name',
    'src',
    'snat',
    'dnat',
    'dest',
    'rx',
    'tx',
    'state',
    'ttl',
  ];

  constructor(private ipfire: IpFireService) { }

  ngOnInit() {
    this.connections = this.ipfire.getStatus('connection').pipe(
      map((status: Connection[]): Connection[] => status));
  }

}
