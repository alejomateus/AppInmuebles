import { TestBed } from '@angular/core/testing';

import { InmueblesService } from './inmuebles.service';

describe('InmueblesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InmueblesService = TestBed.get(InmueblesService);
    expect(service).toBeTruthy();
  });
});
