import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Observable } from 'rxjs';

import { IpFireService } from '../../services/ipfire.service';
import { IpLease } from '../../models/dhcp-status';

@Component({
  selector: 'app-dynamic-leases',
  templateUrl: './dynamic-leases.component.html',
  styleUrls: ['./dynamic-leases.component.scss']
})
export class DynamicLeasesComponent implements OnInit {

  leases: Observable<IpLease[]>;

  columns = ['hostname', 'mac', 'ip', 'lease_end', 'type'];

  constructor(private ipfire: IpFireService) { }

  ngOnInit() {
    this.leases = this.ipfire.getDhcpLeases();
  }

}
