import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SshStatus, SshSession } from '../../models/ssh-status';
import { IpFireService } from '../../services/ipfire.service';

@Component({
  selector: 'app-ssh-sessions',
  templateUrl: './ssh-sessions.component.html',
  styleUrls: ['./ssh-sessions.component.scss']
})
export class SshSessionsComponent implements OnInit {

  sessions: Observable<SshSession[]>;

  columns = ['username', 'login_timestamp', 'ip'];

  constructor(private ipfire: IpFireService) {}

  ngOnInit() {
    this.sessions = this.ipfire.getStatus('remote').pipe(
      map((status: SshStatus) => status.sessions));
  }

}
