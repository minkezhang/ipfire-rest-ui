import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IpFireService } from '../../services/ipfire.service';
import { SshConfig } from '../../models/ssh-config';

@Component({
  selector: 'app-ssh-config',
  templateUrl: './ssh-config.component.html',
  styleUrls: ['./ssh-config.component.scss']
})
export class SshConfigComponent implements OnInit {

  config: Observable<SshConfig>;

  constructor(private ipfire: IpFireService) { }

  ngOnInit() {
    this.config = this.ipfire.getConfig('remote').pipe(
      map((config: SshConfig): SshConfig => config));
  }
}
