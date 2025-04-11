import { TestBed } from '@angular/core/testing';

import { TemakService } from './temak.service';

describe('TemakService', () => {
  let service: TemakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
