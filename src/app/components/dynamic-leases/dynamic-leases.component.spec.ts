import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLeasesComponent } from './dynamic-leases.component';

describe('DynamicLeasesComponent', () => {
  let component: DynamicLeasesComponent;
  let fixture: ComponentFixture<DynamicLeasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicLeasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicLeasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
