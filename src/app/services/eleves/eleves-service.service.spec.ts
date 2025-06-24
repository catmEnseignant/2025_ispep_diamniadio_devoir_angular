import { TestBed } from '@angular/core/testing';
import { ElevesServiceService } from './eleves-service.service';

describe('EleveServiceService', () => {
  let service: ElevesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElevesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
