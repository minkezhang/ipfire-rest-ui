import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SshKey } from '../../models/ssh-key';
import { IPFireService } from '../../services/ipfire.service';

@Component({
  selector: 'app-ssh-keys',
  templateUrl: './ssh-keys.component.html',
  styleUrls: ['./ssh-keys.component.scss']
})
export class SshKeysComponent implements OnInit {

  keys: Observable<SshKey[]>;

  columns = ['file', 'type', 'fingerprint', 'size'];

  constructor(private ipfire: IPFireService) { }

  ngOnInit() {
    this.keys = this.ipfire.getStatus('remote').pipe(
      map((status) => status['keys']));
  }

}
