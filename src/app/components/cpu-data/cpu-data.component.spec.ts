import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuDataComponent } from './cpu-data.component';

describe('CpuDataComponent', () => {
  let component: CpuDataComponent;
  let fixture: ComponentFixture<CpuDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
