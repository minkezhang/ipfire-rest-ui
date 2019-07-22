import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuDataSmallComponent } from './cpu-data-small.component';

describe('CpuDataSmallComponent', () => {
  let component: CpuDataSmallComponent;
  let fixture: ComponentFixture<CpuDataSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuDataSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuDataSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
