import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SshConfigSmallComponent } from './ssh-config-small.component';

describe('SshConfigSmallComponent', () => {
  let component: SshConfigSmallComponent;
  let fixture: ComponentFixture<SshConfigSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SshConfigSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SshConfigSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
