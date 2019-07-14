import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SshSessionsComponent } from './ssh-sessions.component';

describe('SshSessionsComponent', () => {
  let component: SshSessionsComponent;
  let fixture: ComponentFixture<SshSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SshSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SshSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
