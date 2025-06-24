import { TestBed } from '@angular/core/testing';

import { ElevesServicesService } from './eleves-services.service';

describe('ElevesServicesService', () => {
  let service: ElevesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElevesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
