import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'categoria/:nombre', loadComponent: () => import('./components/categoria/categoria.component').then(m => m.CategoriaComponent) },
  { path: 'registro', loadComponent: () => import('./components/registro/registro.component').then(m => m.RegistroComponent) }
];
