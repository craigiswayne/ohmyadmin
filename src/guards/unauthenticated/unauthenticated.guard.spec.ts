import { TestBed } from '@angular/core/testing';
import { CanActivateFn, UrlTree, provideRouter } from '@angular/router';

import { unauthenticated } from './unauthenticated.guard';

describe('unauthenticated route guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => unauthenticated(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([])],
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should allow access (return true) when access token is missing', () => {
    const result = executeGuard(undefined as any, undefined as any);

    // Should not be a UrlTree redirect
    expect(result instanceof UrlTree).toBeFalse();
    // Should allow navigation
    expect(result).toBeTrue();
  });
});
