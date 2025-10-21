import { TestBed } from '@angular/core/testing';
import { FourOhFourComponent } from './404.component';

describe('FourOhFourComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourOhFourComponent],
    }).compileComponents();
  });

  it('should render 404 text', () => {
    const fixture = TestBed.createComponent(FourOhFourComponent);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement as HTMLElement;
    expect(el.textContent?.trim()).toContain('404 Page');
  });
});
