import { Component, OnInit } from '@angular/core';
import { SshSession } from '../../models/ssh-session';

@Component({
  selector: 'app-ssh-sessions',
  templateUrl: './ssh-sessions.component.html',
  styleUrls: ['./ssh-sessions.component.scss']
})
export class SshSessionsComponent implements OnInit {

  sessions = [
    new SshSession('minkezhang', 'some activation time', '192.168.0.1')
  ];

  columns = ['username', 'active_since', 'ip'];

  constructor() { }

  ngOnInit() {
  }

}
