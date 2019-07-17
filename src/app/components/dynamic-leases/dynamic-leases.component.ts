import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IpFireService } from '../../services/ipfire.service';
import { DhcpStatus } from '../../models/dhcp-status';

@Component({
  selector: 'app-dynamic-leases',
  templateUrl: './dynamic-leases.component.html',
  styleUrls: ['./dynamic-leases.component.scss']
})
export class DynamicLeasesComponent implements OnInit {

  status: Observable<DhcpStatus>;

  columns: string[] = ['hostname', 'mac', 'ip', 'lease_end', 'type'];

  constructor(private ipfire: IpFireService) { }

  ngOnInit() {
    this.status = this.ipfire.getStatus('dhcp').pipe(
      map((status: DhcpStatus): DhcpStatus => status));
  }

}
