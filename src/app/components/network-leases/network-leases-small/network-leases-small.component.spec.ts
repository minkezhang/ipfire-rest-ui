import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkLeasesSmallComponent } from './network-leases-small.component';

describe('NetworkLeasesSmallComponent', () => {
  let component: NetworkLeasesSmallComponent;
  let fixture: ComponentFixture<NetworkLeasesSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkLeasesSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkLeasesSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
