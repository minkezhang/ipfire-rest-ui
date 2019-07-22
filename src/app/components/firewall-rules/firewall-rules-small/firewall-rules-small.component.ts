import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FirewallStatus } from '../../../models/firewall-rule';
import { IpFireService } from '../../../services/ipfire.service';

@Component({
  selector: 'app-firewall-rules-small',
  templateUrl: './firewall-rules-small.component.html',
  styleUrls: ['./firewall-rules-small.component.scss']
})
export class FirewallRulesSmallComponent implements OnInit {

  public status: Observable<FirewallStatus>;

  constructor(private ipfire: IpFireService) {
    this.status = this.ipfire.getStatus('firewall').pipe(
      map((status: FirewallStatus): FirewallStatus => status));
  }

  ngOnInit() { }
}
