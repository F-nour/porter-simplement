import { TestBed } from '@angular/core/testing';

import { GlobalService } from './global.service';

describe('ServiceService', () => {
  let service: GlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
