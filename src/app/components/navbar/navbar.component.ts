import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // ✅ Import necesario

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule // ✅ Importado aquí para usar routerLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // Login
  usuario: string = '';
  contrasena: string = '';
  correo: string = '';

  // Registro
  registro = {
    nombre: '',
    usuario: '',
    correo: '',
    clave: '',
    clave2: '',
    fecha: '',
    direccion: '',
    robot: false
  };

  // Acción de login
  login() {
    console.log('Login con', this.usuario, this.contrasena);
  }

  // Acción de recuperación
  recuperarContrasena() {
    console.log('Recuperando para', this.correo);
  }

  // Acción de registro
  registrarUsuario() {
    if (this.registro.clave !== this.registro.clave2) {
      alert("❌ Las contraseñas no coinciden.");
      return;
    }

    console.log("✅ Usuario registrado:", this.registro);
    alert("✔ Registro exitoso");
  }
}
