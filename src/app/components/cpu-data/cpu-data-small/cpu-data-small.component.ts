import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Data } from '../../../models/data';
import { IpFireService } from '../../../services/ipfire.service';

@Component({
  selector: 'app-cpu-data-small',
  templateUrl: './cpu-data-small.component.html',
  styleUrls: ['./cpu-data-small.component.scss']
})
export class CpuDataSmallComponent implements OnInit {

  public data: Observable<Data>;
  public options = {
    curveType: 'function',
    vAxis: {
      format: 'short',
      viewWindow: {
        min: 0
      }
    },
    hAxis: {
    }
  };

  constructor(private ipfire: IpFireService) {
    this.data = this.ipfire.getData('cpu');
  }

  ngOnInit() { }
}
