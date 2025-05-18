import { TestBed } from '@angular/core/testing';

import { TerfigyeloKameraService } from './terfigyelo-kamera.service';

describe('TerfigyeloKameraService', () => {
  let service: TerfigyeloKameraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerfigyeloKameraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
