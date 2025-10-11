import { TestBed } from '@angular/core/testing';

import { DataModelerApiService } from './data-modeler-api.service';

describe('DataModelerService', () => {
  let service: DataModelerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataModelerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
