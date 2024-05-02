import { TestBed } from '@angular/core/testing';

import { VentureService } from './venture.service';

describe('VentureService', () => {
  let service: VentureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
