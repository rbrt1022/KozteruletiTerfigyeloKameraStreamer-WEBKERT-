import { TestBed } from '@angular/core/testing';

import { SzinekService } from './szinek.service';

describe('SzinekService', () => {
  let service: SzinekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SzinekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
