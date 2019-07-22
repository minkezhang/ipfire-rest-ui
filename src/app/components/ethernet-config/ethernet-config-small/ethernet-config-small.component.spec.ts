import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthernetConfigSmallComponent } from './ethernet-config-small.component';

describe('EthernetConfigSmallComponent', () => {
  let component: EthernetConfigSmallComponent;
  let fixture: ComponentFixture<EthernetConfigSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthernetConfigSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthernetConfigSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
