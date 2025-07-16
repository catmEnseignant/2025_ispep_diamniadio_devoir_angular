
import { TestBed } from '@angular/core/testing';
import { ElevesService } from './eleves-services.service';



describe('ElevesServicesService', () => {
  let service: ElevesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElevesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
