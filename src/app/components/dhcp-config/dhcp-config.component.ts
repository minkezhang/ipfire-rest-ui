import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Config } from '../../models/config';
import { DhcpConfig } from '../../models/dhcp-config';

import { IpFireService } from '../../services/ipfire.service';

@Component({
  selector: 'app-dhcp-config',
  templateUrl: './dhcp-config.component.html',
  styleUrls: ['./dhcp-config.component.scss']
})
export class DhcpConfigComponent implements OnInit {
  public config: Observable<DhcpConfig>;

  constructor(private ipfire: IpFireService) { }

  ngOnInit() {
    this.config = this.ipfire.getConfig('dhcp').pipe(
      map((config: DhcpConfig): DhcpConfig => config)
    );
  }

}
