import { TestBed } from '@angular/core/testing';

import { FelhasznaloAzonositasService } from './felhasznalo-azonositas.service';

describe('FelhasznaloAzonositasService', () => {
  let service: FelhasznaloAzonositasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FelhasznaloAzonositasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
