import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Asegúrate de importar esto
import { ButtonModule } from 'primeng/button';
import { NavBarHomeComponent } from '../../shared/components/nav-bar-home/nav-bar-home.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';  // Asegúrate de importar el FooterComponent

@Component({
  selector: 'app-home',
  standalone: true, // si estás usando Angular 17+ con componentes standalone
  imports: [NavBarHomeComponent, ButtonModule, FooterComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // Cambié 'styleUrl' por 'styleUrls'
})
export class HomeComponent {
  
}