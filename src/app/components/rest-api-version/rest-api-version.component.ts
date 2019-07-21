import { Component, OnInit } from '@angular/core';

import {
  MediaLayoutDirective
} from '../../directives/media-layout/media-layout.directive';

@Component({
  selector: 'app-rest-api-version',
  templateUrl: './rest-api-version.component.html',
  styleUrls: ['./rest-api-version.component.scss']
})
export class RestApiVersionComponent extends MediaLayoutDirective { }
