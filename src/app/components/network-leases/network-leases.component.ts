import { Component, OnInit } from '@angular/core';

import {
  MediaLayoutDirective
} from '../../directives/media-layout/media-layout.directive';

@Component({
  selector: 'app-network-leases',
  templateUrl: './network-leases.component.html',
  styleUrls: ['./network-leases.component.scss']
})
export class NetworkLeasesComponent extends MediaLayoutDirective { }
