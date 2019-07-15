import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { FixedLease } from '../../models/dhcp-status';
import { IpFireService } from '../../services/ipfire.service';

@Component({
  selector: 'app-fixed-leases',
  templateUrl: './fixed-leases.component.html',
  styleUrls: ['./fixed-leases.component.scss']
})
export class FixedLeasesComponent implements OnInit {

  leases: Observable<FixedLease[]>;

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
    this.leases = this.ipfire.getFixedLeases();
  }

}
