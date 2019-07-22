import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SshSessionsSmallComponent } from './ssh-sessions-small.component';

describe('SshSessionsSmallComponent', () => {
  let component: SshSessionsSmallComponent;
  let fixture: ComponentFixture<SshSessionsSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SshSessionsSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SshSessionsSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
