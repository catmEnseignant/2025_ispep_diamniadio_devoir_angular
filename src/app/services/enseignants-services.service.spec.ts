import { TestBed } from '@angular/core/testing';

import { EnseignantsServicesService } from './enseignants-services.service';

describe('EnseignantsServicesService', () => {
  let service: EnseignantsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnseignantsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
