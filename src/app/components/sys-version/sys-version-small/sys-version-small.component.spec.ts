import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysVersionSmallComponent } from './sys-version-small.component';

describe('SysVersionSmallComponent', () => {
  let component: SysVersionSmallComponent;
  let fixture: ComponentFixture<SysVersionSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysVersionSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysVersionSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
