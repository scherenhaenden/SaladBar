import { TestBed } from '@angular/core/testing';

import { ApiGenericServiceService } from './api-generic-service.service';

describe('ApiGenericServiceService', () => {
  let service: ApiGenericServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGenericServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
