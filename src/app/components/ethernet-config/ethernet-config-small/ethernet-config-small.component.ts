import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { EthernetConfig } from '../../../models/ethernet-config';
import { IpFireService } from '../../../services/ipfire.service';

@Component({
  selector: 'app-ethernet-config-small',
  templateUrl: './ethernet-config-small.component.html',
  styleUrls: ['./ethernet-config-small.component.scss']
})
export class EthernetConfigSmallComponent implements OnInit {

  public config: Observable<EthernetConfig>;

  constructor(private ipfire: IpFireService) {
    this.config = this.ipfire.getConfig('ethernet').pipe(
      map((config: EthernetConfig): EthernetConfig => config));
  }

  ngOnInit() { }
}
