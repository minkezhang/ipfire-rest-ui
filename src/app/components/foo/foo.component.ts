import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPFireService } from '../../services/ipfire.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {
  foo = null;

  constructor(private ipfire: IPFireService) {}

  getConfig(component: string): void {
    this.ipfire.getConfig(component).subscribe(
        (config) => this.config = config);
  }

  ngOnInit() {
    this.getConfig('main');
  }

}
