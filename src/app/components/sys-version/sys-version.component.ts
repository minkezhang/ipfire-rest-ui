import { Component, OnInit } from '@angular/core';

import {
  MediaLayoutDirective
} from '../../directives/media-layout/media-layout.directive';

@Component({
  selector: 'app-sys-version',
  templateUrl: './sys-version.component.html',
  styleUrls: ['./sys-version.component.scss']
})
export class SysVersionComponent extends MediaLayoutDirective { }
