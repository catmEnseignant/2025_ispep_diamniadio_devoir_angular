import { TestBed } from '@angular/core/testing';
import { EnseignantServicesService } from './enseignants-services.service';



describe('EnseignantsServicesService', () => {
  let service: EnseignantServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnseignantServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
