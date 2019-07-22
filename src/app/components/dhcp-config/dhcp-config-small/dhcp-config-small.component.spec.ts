import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhcpConfigSmallComponent } from './dhcp-config-small.component';

describe('DhcpConfigSmallComponent', () => {
  let component: DhcpConfigSmallComponent;
  let fixture: ComponentFixture<DhcpConfigSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhcpConfigSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhcpConfigSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
