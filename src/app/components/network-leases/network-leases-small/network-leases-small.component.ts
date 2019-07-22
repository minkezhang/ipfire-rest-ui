import { Component, OnInit } from '@angular/core';
      
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
      
import { IpFireService } from '../../../services/ipfire.service';
import { DhcpStatus } from '../../../models/dhcp-status';
      

@Component({
  selector: 'app-network-leases-small',
  templateUrl: './network-leases-small.component.html',
  styleUrls: ['./network-leases-small.component.scss']
})
export class NetworkLeasesSmallComponent implements OnInit {

  status: Observable<DhcpStatus>;

  constructor(private ipfire: IpFireService) {
    this.status = this.ipfire.getStatus('dhcp').pipe(
      map((status: DhcpStatus): DhcpStatus => status));
  }

  ngOnInit() { }
}
