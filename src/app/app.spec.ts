import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { App } from './app';
import { routes } from './app.routes';
import { ThemeService } from './services/theme.service';
import { HomeView } from './ui/home/home';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the home view', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/', HomeView);
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain('Fuentes Miami');
  });

  it('should toggle between light and dark themes', () => {
    const themeService = TestBed.inject(ThemeService);
    themeService.setTheme('light');

    themeService.toggleTheme();
    expect(themeService.resolvedTheme()).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

    themeService.toggleTheme();
    expect(themeService.resolvedTheme()).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });
});
