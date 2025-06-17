import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RegistroComponent } from '../registro/registro.component';
import { LoginComponent } from '../login/login.component';
import { RouterModule } from '@angular/router'; // ✅ Import necesario para routerLink

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule, // ✅ Agregado para habilitar routerLink
    NavbarComponent,
    FooterComponent,
    RegistroComponent,
    LoginComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  categorias = [
    {
      nombre: 'estrategia',
      descripcion: 'Juegos para mentes brillantes',
      imagen: 'assets/img/estrategia.jpg',
      link: '/categoria/estrategia'
    },
    {
      nombre: 'familia',
      descripcion: 'Diversión para todas las edades',
      imagen: 'assets/img/familia.jpg',
      link: '/categoria/familia'
    },
    {
      nombre: 'fiesta',
      descripcion: '¡El alma de la reunión!',
      imagen: 'assets/img/fiesta.jpg',
      link: '/categoria/fiesta'
    },
    {
      nombre: 'cooperativo',
      descripcion: 'Trabajen en equipo',
      imagen: 'assets/img/cooperativo.jpg',
      link: '/categoria/cooperativo'
    }
  ];
}
