import { TestBed } from '@angular/core/testing';

import { SeekerServiceService } from './seeker-service.service';

describe('SeekerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeekerServiceService = TestBed.get(SeekerServiceService);
    expect(service).toBeTruthy();
  });
});
