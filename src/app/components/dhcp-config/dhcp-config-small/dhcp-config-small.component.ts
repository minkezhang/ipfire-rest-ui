import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
    
import { Config } from '../../../models/config';
import { DhcpConfig } from '../../../models/dhcp-config';

import { IpFireService } from '../../../services/ipfire.service';

@Component({
  selector: 'app-dhcp-config-small',
  templateUrl: './dhcp-config-small.component.html',
  styleUrls: ['./dhcp-config-small.component.scss']
})
export class DhcpConfigSmallComponent implements OnInit {

  public config: Observable<DhcpConfig>;

  constructor(private ipfire: IpFireService) {
    this.config = this.ipfire.getConfig('dhcp').pipe(
      map((config: DhcpConfig): DhcpConfig => config));
  }

  ngOnInit() { }
}
