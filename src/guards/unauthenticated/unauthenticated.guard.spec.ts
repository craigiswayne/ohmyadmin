import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import {unauthenticated} from './unauthenticated.guard';

describe('unauthenticated route guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => unauthenticated(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
