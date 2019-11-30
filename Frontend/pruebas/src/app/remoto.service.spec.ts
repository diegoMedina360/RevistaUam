import { TestBed } from '@angular/core/testing';

import { RemotoService } from './remoto.service';

describe('RemotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemotoService = TestBed.get(RemotoService);
    expect(service).toBeTruthy();
  });
});
