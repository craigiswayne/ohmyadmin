import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { App } from './app';

describe('App Routes', () => {
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();

    router = TestBed.inject(Router);
  });

  it('navigates to /login and renders Login page content', async () => {
    const fixture = TestBed.createComponent(App);
    await router.navigateByUrl('/login');
    fixture.detectChanges();

    const host: HTMLElement = fixture.nativeElement as HTMLElement;
    expect(router.url).toBe('/login');
    expect(host.textContent).toContain('Login Page');
  });

  it('navigates to unknown route and renders 404 page', async () => {
    const fixture = TestBed.createComponent(App);
    await router.navigateByUrl('/this-route-does-not-exist');
    fixture.detectChanges();

    const host: HTMLElement = fixture.nativeElement as HTMLElement;
    expect(router.url).toBe('/this-route-does-not-exist');
    expect(host.textContent).toContain('404 Page');
  });

  it('root path is guarded and redirects to /login (via authenticated guard)', async () => {
    const fixture = TestBed.createComponent(App);
    await router.navigateByUrl('');
    fixture.detectChanges();

    // With access_token=false in the authenticated guard, navigating to '' should redirect to /login
    expect(router.url).toBe('/login');
  });
});
