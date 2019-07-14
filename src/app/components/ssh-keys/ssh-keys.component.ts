import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { SshKey } from '../../models/ssh-key';
import { IPFireService } from '../../services/ipfire.service';

@Component({
  selector: 'app-ssh-keys',
  templateUrl: './ssh-keys.component.html',
  styleUrls: ['./ssh-keys.component.scss']
})
export class SshKeysComponent implements OnInit {

  keys: MatTableDataSource<SshKey>;

  columns = ['file', 'type', 'fingerprint', 'size'];

  constructor(private ipfire: IPFireService) { }

  ngOnInit() {
    this.ipfire.getStatus('remote').subscribe(
      (status) => this.keys = new MatTableDataSource(status['keys']));
  }

}
