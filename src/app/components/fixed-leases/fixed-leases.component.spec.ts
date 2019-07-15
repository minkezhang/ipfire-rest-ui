import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedLeasesComponent } from './fixed-leases.component';

describe('FixedLeasesComponent', () => {
  let component: FixedLeasesComponent;
  let fixture: ComponentFixture<FixedLeasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedLeasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedLeasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
