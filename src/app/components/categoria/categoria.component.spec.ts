import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaComponent } from './categoria.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CategoriaComponent', () => {
  let component: CategoriaComponent;
  let fixture: ComponentFixture<CategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: () => 'estrategia' }) // simulación de ruta
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });
});
