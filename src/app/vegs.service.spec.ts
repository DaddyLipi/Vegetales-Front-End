import { TestBed } from '@angular/core/testing';

import { VegsService } from './vegs.service';

describe('VegsService', () => {
  let service: VegsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VegsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
