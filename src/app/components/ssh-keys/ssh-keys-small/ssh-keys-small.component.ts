import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SshKey, SshStatus } from '../../../models/ssh-status';
import { IpFireService } from '../../../services/ipfire.service';

@Component({
  selector: 'app-ssh-keys-small',
  templateUrl: './ssh-keys-small.component.html',
  styleUrls: ['./ssh-keys-small.component.scss']
})
export class SshKeysSmallComponent implements OnInit {

  ssh_keys: Observable<SshKey[]>;

  constructor(private ipfire: IpFireService) {
    this.ssh_keys = this.ipfire.getStatus('remote').pipe(
      map((status: SshStatus): SshKey[] => status.keys));
  }

  ngOnInit() { }
}
