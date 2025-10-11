import { TestBed } from '@angular/core/testing';

import { AIFlowBuilderService } from './aiflow-builder.service';

describe('AIFlowBuilderService', () => {
  let service: AIFlowBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AIFlowBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
