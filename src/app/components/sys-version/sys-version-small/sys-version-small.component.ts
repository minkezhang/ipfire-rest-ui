import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SysConfig } from '../../../models/sys-config';
import { IpFireService } from '../../../services/ipfire.service';

@Component({
  selector: 'app-sys-version-small',
  templateUrl: './sys-version-small.component.html',
  styleUrls: ['./sys-version-small.component.scss']
})
export class SysVersionSmallComponent implements OnInit {

  public config: Observable<SysConfig>;

  constructor(private ipfire: IpFireService) {
    this.config = this.ipfire.getConfig('sys').pipe(
      map((config: SysConfig): SysConfig => config));
  }

  ngOnInit() { }

}
