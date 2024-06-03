import { TestBed } from '@angular/core/testing';

import { InsurancePackServiceService } from './insurance-pack-service.service';

describe('InsurancePackServiceService', () => {
  let service: InsurancePackServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsurancePackServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
