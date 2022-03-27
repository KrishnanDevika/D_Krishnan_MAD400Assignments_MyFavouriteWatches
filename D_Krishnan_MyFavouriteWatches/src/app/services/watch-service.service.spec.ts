import { TestBed } from '@angular/core/testing';

import { WatchServiceService } from './watch-service.service';

describe('WatchServiceService', () => {
  let service: WatchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
