import { TestBed } from '@angular/core/testing';

import { IPFireService } from './ipfire.service';

describe('IPFireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IPFireService = TestBed.get(IPFireService);
    expect(service).toBeTruthy();
  });
});
