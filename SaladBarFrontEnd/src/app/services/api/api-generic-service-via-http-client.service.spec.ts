import { TestBed } from '@angular/core/testing';

import { ApiGenericServiceViaHttpClientService } from './api-generic-service-via-http-client.service';

describe('ApiGenericServiceViaHttpClientService', () => {
  let service: ApiGenericServiceViaHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGenericServiceViaHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
