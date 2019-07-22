import { Component, OnInit } from '@angular/core';

import {
  MediaLayoutDirective
} from '../../directives/media-layout/media-layout.directive';

@Component({
  selector: 'app-dhcp-config',
  templateUrl: './dhcp-config.component.html',
  styleUrls: ['./dhcp-config.component.scss']
})
export class DhcpConfigComponent extends MediaLayoutDirective { }
