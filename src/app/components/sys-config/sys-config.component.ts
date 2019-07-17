import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SysConfig } from '../../models/sys-config';
import { IpFireService } from '../../services/ipfire.service';

@Component({
  selector: 'app-sys-config',
  templateUrl: './sys-config.component.html',
  styleUrls: ['./sys-config.component.scss']
})
export class SysConfigComponent implements OnInit {
  public config: Observable<SysConfig>;

  constructor(private ipfire: IpFireService) { }

  ngOnInit() {
    this.config = this.ipfire.getConfig('sys').pipe(
      map((config: SysConfig): SysConfig => config)
    );
  }

}
