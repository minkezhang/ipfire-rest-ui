import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IPFireService } from '../../services/ipfire.service';
import { SshConfig } from '../../models/ssh-config';

@Component({
  selector: 'app-ssh-config',
  templateUrl: './ssh-config.component.html',
  styleUrls: ['./ssh-config.component.scss']
})
export class SshConfigComponent implements OnInit {

  config: SshConfig;

  constructor(private ipfire: IPFireService) { }

  ngOnInit() {
    this.ipfire.getConfig('remote').subscribe(
      (config) => this.config = Object.create(config));
  }
}
