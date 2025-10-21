import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';

export const authenticated: CanActivateFn = (route, state) => {
  const access_token = false
  const router: Router = inject(Router);

  if(!access_token){
    return router.createUrlTree(['/login']);
  }

  return true
};
