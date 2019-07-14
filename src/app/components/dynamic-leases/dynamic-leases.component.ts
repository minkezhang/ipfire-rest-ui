import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Observable } from 'rxjs';

import { IPFireService } from '../../services/ipfire.service';
import { IPLease } from '../../models/lease';

@Component({
  selector: 'app-dynamic-leases',
  templateUrl: './dynamic-leases.component.html',
  styleUrls: ['./dynamic-leases.component.scss']
})
export class DynamicLeasesComponent implements OnInit {

  leases: Observable<IPLease[]>;

  columns = ['ip', 'lease_end', 'type', 'mac', 'hostname'];

  constructor(private ipfire: IPFireService) { }

  ngOnInit() {
    this.leases = this.ipfire.getDHCPLeases();
  }

}
