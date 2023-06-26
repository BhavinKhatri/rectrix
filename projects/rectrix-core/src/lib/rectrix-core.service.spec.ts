import { TestBed } from '@angular/core/testing';

import { RectrixCoreService } from './rectrix-core.service';

describe('RectrixCoreService', () => {
  let service: RectrixCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RectrixCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
