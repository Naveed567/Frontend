import { TestBed } from '@angular/core/testing';

import { TeacherschedulteService } from './teacherschedulte.service';

describe('TeacherschedulteService', () => {
  let service: TeacherschedulteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherschedulteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
