import { Component, OnInit } from '@angular/core';

import {
  MediaLayoutDirective
} from '../../directives/media-layout/media-layout.directive';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent extends MediaLayoutDirective { }
