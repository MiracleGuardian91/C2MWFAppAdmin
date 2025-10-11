import { TestBed } from '@angular/core/testing';

import { ModelerApiService } from './modeler-api.service';

describe('ModelerApiService', () => {
  let service: ModelerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
