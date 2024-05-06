import { TestBed } from '@angular/core/testing';

import { InsuranceServicesService } from './insurance-services.service';

describe('InsuranceServicesService', () => {
  let service: InsuranceServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
