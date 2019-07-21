import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { ApiVersion } from '../../../models/api-version';
import { IpFireService } from '../../../services/ipfire.service';

@Component({
  selector: 'app-rest-api-version-small',
  templateUrl: './rest-api-version-small.component.html',
  styleUrls: ['./rest-api-version-small.component.scss']
})
export class RestApiVersionSmallComponent implements OnInit {

  public api_version: Observable<ApiVersion[]>;

  constructor(private ipfire: IpFireService) {
    this.api_version = this.ipfire.getApiVersion();
  }

  ngOnInit() {
  }
}
