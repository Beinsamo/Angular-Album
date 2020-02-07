import { TestBed } from '@angular/core/testing';

import { HomechangeService } from './homechange.service';

describe('HomechangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomechangeService = TestBed.get(HomechangeService);
    expect(service).toBeTruthy();
  });
});
