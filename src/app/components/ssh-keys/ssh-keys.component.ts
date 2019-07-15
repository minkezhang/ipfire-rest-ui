import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SshStatus, SshKey } from '../../models/ssh-status';
import { IpFireService } from '../../services/ipfire.service';

@Component({
  selector: 'app-ssh-keys',
  templateUrl: './ssh-keys.component.html',
  styleUrls: ['./ssh-keys.component.scss']
})
export class SshKeysComponent implements OnInit {

  keys: Observable<SshKey[]>;

  columns = ['file', 'type', 'fingerprint', 'size'];

  constructor(private ipfire: IpFireService) { }

  ngOnInit() {
    this.keys = this.ipfire.getStatus('remote').pipe(
      map((status: SshStatus) => status.keys));
  }

}
