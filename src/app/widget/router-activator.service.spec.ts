import { TestBed, inject } from '@angular/core/testing';

import { RouterActivatorService } from './router-activator.service';

describe('RouterActivatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterActivatorService]
    });
  });

  it('should be created', inject([RouterActivatorService], (service: RouterActivatorService) => {
    expect(service).toBeTruthy();
  }));
});
