import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { IpFireService } from '../../services/ipfire.service';
import { Data } from '../../models/data';

@Component({
  selector: 'app-cpu-data',
  templateUrl: './cpu-data.component.html',
  styleUrls: ['./cpu-data.component.scss']
})
export class CpuDataComponent implements OnInit {

  public data: Observable<Data>;
  public options: Object = {
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

  constructor(private ipfire: IpFireService) { }

  ngOnInit() {
    this.data = this.ipfire.getData('cpu');
  }

}
