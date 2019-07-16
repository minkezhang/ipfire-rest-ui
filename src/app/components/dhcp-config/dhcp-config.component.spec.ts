import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhcpConfigComponent } from './dhcp-config.component';

describe('DhcpConfigComponent', () => {
  let component: DhcpConfigComponent;
  let fixture: ComponentFixture<DhcpConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhcpConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhcpConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
