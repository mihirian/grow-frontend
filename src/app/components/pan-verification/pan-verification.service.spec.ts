import { TestBed } from '@angular/core/testing';

import { PanVerificationService } from './pan-verification.service';

describe('PanVerificationService', () => {
  let service: PanVerificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanVerificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
