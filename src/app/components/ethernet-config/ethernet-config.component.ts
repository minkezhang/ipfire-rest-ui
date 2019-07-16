import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IpFireService } from '../../services/ipfire.service';

import { EthernetConfig } from '../../models/ethernet-config';

@Component({
  selector: 'app-ethernet-config',
  templateUrl: './ethernet-config.component.html',
  styleUrls: ['./ethernet-config.component.scss']
})
export class EthernetConfigComponent implements OnInit {
  public config: Observable<EthernetConfig>;

  constructor(private ipfire: IpFireService) {}

  ngOnInit() {
    this.config = this.ipfire.getConfig('ethernet').pipe(
      map((config: EthernetConfig) => config)
    );
  }

}
