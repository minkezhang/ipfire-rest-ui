import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IpFireService } from '../../../services/ipfire.service';
import { SshConfig } from '../../../models/ssh-config';

@Component({
  selector: 'app-ssh-config-small',
  templateUrl: './ssh-config-small.component.html',
  styleUrls: ['./ssh-config-small.component.scss']
})
export class SshConfigSmallComponent implements OnInit {

  config: Observable<SshConfig>;

  constructor(private ipfire: IpFireService) {
    this.config = this.ipfire.getConfig('remote').pipe(
      map((config: SshConfig): SshConfig => config));
  }

  ngOnInit() { }
}
