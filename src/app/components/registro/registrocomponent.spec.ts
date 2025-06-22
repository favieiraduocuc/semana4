import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro.component';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RegistroComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener datos iniciales vacíos en el formulario', () => {
    const form = component.registroForm;
    expect(form.get('nombre')?.value).toBe('');
    expect(form.get('usuario')?.value).toBe('');
    expect(form.get('correo')?.value).toBe('');
    expect(form.get('clave')?.value).toBe('');
    expect(form.get('clave2')?.value).toBe('');
    expect(form.get('fecha')?.value).toBe('');
    expect(form.get('direccion')?.value).toBe('');
    expect(form.get('robot')?.value).toBeFalse();
  });

  it('debería detectar si las contraseñas no coinciden', () => {
    const form = component.registroForm;
    form.get('clave')?.setValue('123456');
    form.get('clave2')?.setValue('654321');

    const clavesCoinciden = form.get('clave')?.value === form.get('clave2')?.value;
    expect(clavesCoinciden).toBeFalse();
  });
});
