import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirewallRulesSmallComponent } from './firewall-rules-small.component';

describe('FirewallRulesSmallComponent', () => {
  let component: FirewallRulesSmallComponent;
  let fixture: ComponentFixture<FirewallRulesSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirewallRulesSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirewallRulesSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
