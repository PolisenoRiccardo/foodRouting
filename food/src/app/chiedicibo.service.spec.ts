import { TestBed } from '@angular/core/testing';

import { ChiediciboService } from './chiedicibo.service';

describe('ChiediciboService', () => {
  let service: ChiediciboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChiediciboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
