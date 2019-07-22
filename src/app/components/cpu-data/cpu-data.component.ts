import { Component, OnInit } from '@angular/core';

import {
  MediaLayoutDirective
} from '../../directives/media-layout/media-layout.directive';
  
@Component({
  selector: 'app-cpu-data',
  templateUrl: './cpu-data.component.html',
  styleUrls: ['./cpu-data.component.scss']
})
export class CpuDataComponent extends MediaLayoutDirective { }
