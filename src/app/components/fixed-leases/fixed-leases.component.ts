import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DhcpStatus } from '../../models/dhcp-status';
import { IpFireService } from '../../services/ipfire.service';

@Component({
  selector: 'app-fixed-leases',
  templateUrl: './fixed-leases.component.html',
  styleUrls: ['./fixed-leases.component.scss']
})
export class FixedLeasesComponent implements OnInit {

  status: Observable<DhcpStatus>;

  columns: string[] = [
    'mac',
    'ip',
    'next_server',
    'filename',
    'root_path',
    'remark',
    'enabled'];

  constructor(private ipfire: IpFireService) { }

  ngOnInit() {
    this.status = this.ipfire.getStatus('dhcp').pipe(
      map((status: DhcpStatus): DhcpStatus => status));
  }

}
