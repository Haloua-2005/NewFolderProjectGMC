import { TestBed } from '@angular/core/testing';

import { HiringServiceService } from './hiring-service.service';

describe('HiringServiceService', () => {
  let service: HiringServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HiringServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
