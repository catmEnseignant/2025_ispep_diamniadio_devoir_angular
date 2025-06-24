import { TestBed } from '@angular/core/testing';

import { EnseignantsServiceService } from './enseignants-service.service';

describe('EnseignantsServiceService', () => {
  let service: EnseignantsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnseignantsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});