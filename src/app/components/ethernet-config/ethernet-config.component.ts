import { Component, OnInit } from '@angular/core';
  
import {
  MediaLayoutDirective
} from '../../directives/media-layout/media-layout.directive';

@Component({
  selector: 'app-ethernet-config',
  templateUrl: './ethernet-config.component.html',
  styleUrls: ['./ethernet-config.component.scss']
})
export class EthernetConfigComponent extends MediaLayoutDirective { }
