import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Directive, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

@Directive({
  selector: '[appMediaLayout]',
})
export class MediaLayoutDirective implements OnInit {

  public is_small: Observable<BreakpointState>;
  public is_large: Observable<BreakpointState>;

  constructor(protected breakpoint: BreakpointObserver) {
    this.is_small = breakpoint.observe([
        Breakpoints.Handset,
        Breakpoints.Tablet,
        Breakpoints.Web]);
    // this.is_small = breakpoint.observe([Breakpoints.Handset]);
    this.is_large = breakpoint.observe([Breakpoints.Tablet, Breakpoints.Web]);
  }

  ngOnInit() {
  }

}
