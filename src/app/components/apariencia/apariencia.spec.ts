import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Apariencia } from './apariencia';

describe('Apariencia', () => {
  let component: Apariencia;
  let fixture: ComponentFixture<Apariencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apariencia],
    }).compileComponents();

    fixture = TestBed.createComponent(Apariencia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
