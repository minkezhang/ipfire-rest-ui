import { Component, OnInit } from '@angular/core';

import { SshSession } from '../../models/ssh-session';
import { IPFireService } from '../../services/ipfire.service';

@Component({
  selector: 'app-ssh-sessions',
  templateUrl: './ssh-sessions.component.html',
  styleUrls: ['./ssh-sessions.component.scss']
})
export class SshSessionsComponent implements OnInit {

  sessions: SshSession[] = null;

  columns = ['username', 'login_timestamp', 'ip'];

  constructor(private ipfire: IPFireService) {}

  ngOnInit() {
    this.ipfire.getStatus('remote').subscribe(
      (status) => this.sessions = status['sessions']);
  }

}
