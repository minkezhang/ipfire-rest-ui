import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MediaLayoutDirective } from '../../directives/media-layout/media-layout.directive';
import { ApiVersion } from '../../models/api-version';
import { IpFireService } from '../../services/ipfire.service';

@Component({
  selector: 'app-api-version',
  templateUrl: './api-version.component.html',
  styleUrls: ['./api-version.component.scss']
})
export class ApiVersionComponent extends MediaLayoutDirective {

  public version: Observable<ApiVersion[]>;

  constructor(
    private ipfire: IpFireService,
    protected breakpoint: BreakpointObserver) {
    super(breakpoint);
  }

  ngOnInit() {
    this.version = this.ipfire.getApiVersion();
  }

}
