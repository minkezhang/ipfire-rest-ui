import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
      
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
    
import { IpFireService } from '../../services/ipfire.service';
import { DhcpStatus } from '../../models/dhcp-status';

@Component({
  selector: 'app-leases',
  templateUrl: './leases.component.html',
  styleUrls: ['./leases.component.scss']
})
export class LeasesComponent implements OnInit {

  status: Observable<DhcpStatus>;

  constructor(private ipfire: IpFireService) { }

  ngOnInit() {
    this.status = this.ipfire.getStatus('dhcp').pipe(
      map((status: DhcpStatus): DhcpStatus => status));
  }

}
