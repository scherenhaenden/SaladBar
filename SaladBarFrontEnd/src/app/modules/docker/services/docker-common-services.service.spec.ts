import { TestBed } from '@angular/core/testing';

import { DockerCommonServicesService } from './docker-common-services.service';

describe('DockerCommonServicesService', () => {
  let service: DockerCommonServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DockerCommonServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
