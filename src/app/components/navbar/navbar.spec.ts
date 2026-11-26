import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Navbar } from './navbar';

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the brand, search field, and account action', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('.navbar__brand')?.textContent?.trim()).toBe('Fuentes Miami');
    expect(element.querySelector<HTMLImageElement>('.navbar__brand-icon')?.getAttribute('src')).toBe(
      'assets/img/palmera.png',
    );
    expect(element.querySelector('.navbar__menu[aria-label="Abrir menú"] ng-icon')).toBeTruthy();
    expect(element.querySelector('.navbar__search-icon')).toBeTruthy();
    expect(element.querySelector('input[type="search"]')).toBeTruthy();
    expect(element.querySelector('.navbar__account')?.textContent?.trim()).toBe('Crear cuenta');
  });
});
