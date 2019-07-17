import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FirewallStatus } from '../../models/firewall-rule';

import { IpFireService } from '../../services/ipfire.service';

@Component({
  selector: 'app-firewall-rules',
  templateUrl: './firewall-rules.component.html',
  styleUrls: ['./firewall-rules.component.scss']
})
export class FirewallRulesComponent implements OnInit {

  public status: Observable<FirewallStatus>;

  public columns: string[] = [
      'action',
      'src',
      'dest',
      'nat_target_type',
      'l4_protocol',
      'src_filter',
      'dest_filter'
  ];

  constructor(private ipfire: IpFireService) { }

  ngOnInit() {
    this.status = this.ipfire.getStatus('firewall').pipe(
      map((status: FirewallStatus): FirewallStatus => status)
    );
  }

}
