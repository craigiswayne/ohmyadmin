import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router, UrlTree, provideRouter } from '@angular/router';

import { authenticated } from './authenticated.guard';

describe('authenticated route guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authenticated(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([])],
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should redirect to /login when access token is missing', () => {
    const router = TestBed.inject(Router);

    const result = executeGuard(undefined as any, undefined as any);

    expect(result instanceof UrlTree).toBeTrue();

    const url = router.serializeUrl(result as UrlTree);
    const expected = router.serializeUrl(router.createUrlTree(['/login']));
    expect(url).toBe(expected);
  });
});
