import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-media-layout',
  templateUrl: './media-layout.component.html',
  styleUrls: ['./media-layout.component.scss']
})
export class MediaLayoutComponent implements OnInit {

  public is_small: Observable<BreakpointState>;
  public is_large: Observable<BreakpointState>;

  constructor(private breakpoint: BreakpointObserver) {
    this.is_small = breakpoint.observe([Breakpoints.Handset]);
    this.is_large = breakpoint.observe([Breakpoints.Tablet, Breakpoints.Web]);
  }

  ngOnInit() {
  }

}
