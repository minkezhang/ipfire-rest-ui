import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SshSession } from '../../models/ssh-session';
import { IPFireService } from '../../services/ipfire.service';

@Component({
  selector: 'app-ssh-sessions',
  templateUrl: './ssh-sessions.component.html',
  styleUrls: ['./ssh-sessions.component.scss']
})
export class SshSessionsComponent implements OnInit {

  sessions: Observable<SshSession[]>;

  columns = ['username', 'login_timestamp', 'ip'];

  constructor(private ipfire: IPFireService) {}

  ngOnInit() {
    this.sessions = this.ipfire.getStatus('remote').pipe(
      map((status) => status['sessions']));
  }

}
