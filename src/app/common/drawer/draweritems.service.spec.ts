import { TestBed } from '@angular/core/testing';

import { DraweritemsService } from './draweritems.service';

describe('DraweritemsService', () => {
  let service: DraweritemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DraweritemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
