import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SshKeysSmallComponent } from './ssh-keys-small.component';

describe('SshKeysSmallComponent', () => {
  let component: SshKeysSmallComponent;
  let fixture: ComponentFixture<SshKeysSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SshKeysSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SshKeysSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
