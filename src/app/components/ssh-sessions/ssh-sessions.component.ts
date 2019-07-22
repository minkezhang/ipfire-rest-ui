import { Component, OnInit } from '@angular/core';

import {
  MediaLayoutDirective
} from '../../directives/media-layout/media-layout.directive';

@Component({
  selector: 'app-ssh-sessions',
  templateUrl: './ssh-sessions.component.html',
  styleUrls: ['./ssh-sessions.component.scss']
})
export class SshSessionsComponent extends MediaLayoutDirective { }
