import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiVersion } from '../../models/api-version';
import { IpFireService } from '../../services/ipfire.service';

@Component({
  selector: 'app-api-version',
  templateUrl: './api-version.component.html',
  styleUrls: ['./api-version.component.scss']
})
export class ApiVersionComponent implements OnInit {

  public version: Observable<ApiVersion[]>;

  constructor(private ipfire: IpFireService) { }

  ngOnInit() {
    this.version = this.ipfire.getApiVersion();
  }

}
