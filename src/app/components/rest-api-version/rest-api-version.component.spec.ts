import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiVersionComponent } from './rest-api-version.component';

describe('RestApiVersionComponent', () => {
  let component: RestApiVersionComponent;
  let fixture: ComponentFixture<RestApiVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestApiVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestApiVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
