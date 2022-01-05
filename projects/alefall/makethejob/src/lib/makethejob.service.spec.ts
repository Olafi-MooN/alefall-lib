import { TestBed } from '@angular/core/testing';

import { MakethejobService } from './makethejob.service';

describe('MakethejobService', () => {
  let service: MakethejobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakethejobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
