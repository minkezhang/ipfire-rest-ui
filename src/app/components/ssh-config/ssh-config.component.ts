import { Component, OnInit } from '@angular/core';

import {
  MediaLayoutDirective
} from '../../directives/media-layout/media-layout.directive';

@Component({
  selector: 'app-ssh-config',
  templateUrl: './ssh-config.component.html',
  styleUrls: ['./ssh-config.component.scss']
})
export class SshConfigComponent extends MediaLayoutDirective { }
