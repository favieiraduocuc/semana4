import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
// Importar luego CategoriaComponent cuando lo tengas

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'categoria/:nombre', loadComponent: () => import('./components/categoria/categoria.component').then(m => m.CategoriaComponent) }
];
