import { TestBed } from '@angular/core/testing';

import { CanActiveAuthGuardService } from './can-active-auth-guard.service';

describe('CanActiveAuthGuardService', () => {
  let service: CanActiveAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActiveAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
