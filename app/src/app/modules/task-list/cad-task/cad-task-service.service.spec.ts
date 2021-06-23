import { TestBed } from '@angular/core/testing';

import { CadTaskServiceService } from './cad-task-service.service';

describe('CadTaskServiceService', () => {
  let service: CadTaskServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadTaskServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
