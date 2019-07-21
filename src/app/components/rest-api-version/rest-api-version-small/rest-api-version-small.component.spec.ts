import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiVersionSmallComponent } from './rest-api-version-small.component';

describe('RestApiVersionSmallComponent', () => {
  let component: RestApiVersionSmallComponent;
  let fixture: ComponentFixture<RestApiVersionSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestApiVersionSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestApiVersionSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
