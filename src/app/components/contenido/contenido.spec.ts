import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contenido } from './contenido';

describe('Contenido', () => {
  let component: Contenido;
  let fixture: ComponentFixture<Contenido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contenido],
    }).compileComponents();

    fixture = TestBed.createComponent(Contenido);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the content area', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    const content: HTMLElement = fixture.nativeElement.querySelector('.contenido-panel__body');

    expect(button.textContent?.trim()).toBe('Ocultar');
    expect(content.hidden).toBe(false);

    button.click();
    fixture.detectChanges();

    expect(button.textContent?.trim()).toBe('Mostrar');
    expect(content.hidden).toBe(true);

    button.click();
    fixture.detectChanges();

    expect(button.textContent?.trim()).toBe('Ocultar');
    expect(content.hidden).toBe(false);
  });
});
