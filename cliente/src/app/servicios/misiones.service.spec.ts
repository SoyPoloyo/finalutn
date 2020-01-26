import { TestBed } from '@angular/core/testing';

import { MisionesService } from './misiones.service';

describe('MisionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MisionesService = TestBed.get(MisionesService);
    expect(service).toBeTruthy();
  });
});
