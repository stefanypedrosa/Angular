import { TestBed } from '@angular/core/testing';

import { ListawebService } from './listaweb.service';

describe('ListawebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListawebService = TestBed.get(ListawebService);
    expect(service).toBeTruthy();
  });
});
