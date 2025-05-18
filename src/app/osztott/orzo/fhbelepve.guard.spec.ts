import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { fhbelepveGuard } from './fhbelepve.guard';

describe('fhbelepveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => fhbelepveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
