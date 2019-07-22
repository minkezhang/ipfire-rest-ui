import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SshSession, SshStatus } from '../../../models/ssh-status';
import { IpFireService } from '../../../services/ipfire.service';

@Component({
  selector: 'app-ssh-sessions-small',
  templateUrl: './ssh-sessions-small.component.html',
  styleUrls: ['./ssh-sessions-small.component.scss']
})
export class SshSessionsSmallComponent implements OnInit {

  ssh_sessions: Observable<SshSession[]>;

  constructor(private ipfire: IpFireService) {
    this.ssh_sessions = this.ipfire.getStatus('remote').pipe(
      map((status: SshStatus): SshSession[] => status.sessions));
  }

  ngOnInit() { }
}
