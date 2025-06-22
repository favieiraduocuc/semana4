import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,        // ✅ Necesario para <router-outlet>
    NavbarComponent,     // ✅ navbar fijo en todas las páginas
    FooterComponent      // ✅ footer fijo
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tableromania-angular'; // ✅ esto es lo que espera el test
}