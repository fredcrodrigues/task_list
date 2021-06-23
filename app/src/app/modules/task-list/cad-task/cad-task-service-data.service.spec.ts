import { TestBed } from '@angular/core/testing';

import { CadTaskServiceDataService } from './cad-task-service-data.service';

describe('CadTaskServiceDataService', () => {
  let service: CadTaskServiceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadTaskServiceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
