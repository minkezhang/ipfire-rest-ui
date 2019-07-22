import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsSmallComponent } from './connections-small.component';

describe('ConnectionsSmallComponent', () => {
  let component: ConnectionsSmallComponent;
  let fixture: ComponentFixture<ConnectionsSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionsSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionsSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
