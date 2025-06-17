// categoria.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  categoria: string = '';
  juegos: any[] = [];

  todosLosJuegos: any = {
    estrategia: [
      { nombre: 'Catan', imagen: 'assets/img/juegos/catan.jpg', descripcion: 'Coloniza islas y comercia.' },
      { nombre: 'Ajedrez', imagen: 'assets/img/juegos/ajedrez.jpg', descripcion: 'Clásico juego de estrategia.' },
      { nombre: 'Risk', imagen: 'assets/img/juegos/risk.jpg', descripcion: 'Conquista el mundo por turnos.' },
      { nombre: '7 Wonders', imagen: 'assets/img/juegos/7wonders.jpg', descripcion: 'Construye una civilización.' }
    ],
    familia: [
      { nombre: 'Uno', imagen: 'assets/img/juegos/uno.jpg', descripcion: 'Juego de cartas para todos.' },
      { nombre: 'Monopoly', imagen: 'assets/img/juegos/monopoly.jpg', descripcion: 'Compra y vende propiedades.' },
      { nombre: 'Ludo', imagen: 'assets/img/juegos/ludo.jpg', descripcion: 'Corre y gana con tus fichas.' },
      { nombre: 'Jenga', imagen: 'assets/img/juegos/jenga.jpg', descripcion: 'No dejes que la torre caiga.' }
    ],
    fiesta: [
      { nombre: 'Dixit', imagen: 'assets/img/juegos/dixit.jpg', descripcion: 'Imaginación y diversión.' },
      { nombre: 'Pictionary', imagen: 'assets/img/juegos/pictionary.jpg', descripcion: 'Dibuja y adivina.' },
      { nombre: 'Jungle Speed', imagen: 'assets/img/juegos/jungle.jpg', descripcion: 'Rapidez y reflejos.' },
      { nombre: 'Twister', imagen: 'assets/img/juegos/twister.jpg', descripcion: 'Desafía tu equilibrio.' }
    ],
    cooperativo: [
      { nombre: 'Pandemic', imagen: 'assets/img/juegos/pandemic.jpg', descripcion: 'Salva al mundo juntos.' },
      { nombre: 'Mysterium', imagen: 'assets/img/juegos/mysterium.jpg', descripcion: 'Comunicación y deducción.' },
      { nombre: 'Forbidden Island', imagen: 'assets/img/juegos/forbidden.jpg', descripcion: 'Aventura cooperativa.' },
      { nombre: 'The Mind', imagen: 'assets/img/juegos/themind.jpg', descripcion: 'Sincroniza con tu equipo.' }
    ]
  };

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const nombreCategoria = params.get('nombre');
      if (nombreCategoria && this.todosLosJuegos[nombreCategoria]) {
        this.categoria = nombreCategoria;
        this.juegos = this.todosLosJuegos[nombreCategoria];
      }
    });
  }
}
