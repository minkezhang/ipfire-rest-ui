import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthernetConfigComponent } from './ethernet-config.component';

describe('EthernetConfigComponent', () => {
  let component: EthernetConfigComponent;
  let fixture: ComponentFixture<EthernetConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthernetConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthernetConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
