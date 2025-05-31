import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule, Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar-login',
  standalone: true,
  imports: [ButtonModule, MenuModule, RouterLink],
  templateUrl: './nav-bar-login.component.html',
  styleUrls: ['./nav-bar-login.component.css']
})
export class NavBarLoginComponent {
  @ViewChild('menu') menu!: Menu;

  constructor(private router: Router) {}

  items: MenuItem[] = [
    { 
      label: 'Estudiante',
      icon: 'pi pi-user',
      command: () => this.navigateTo('/login/student')  // Ensure proper redirection
    },
    { 
      label: 'Empresa', 
      icon: 'pi pi-briefcase',
      command: () => this.navigateTo('/login/company')  // Ensure proper redirection
    }
  ];

  onButtonClick(event: MouseEvent) {
    this.menu.toggle(event);
  }

  navigateToRegister(): void {
    this.router.navigate(['/register/student']).catch(err => {
      console.error('Navigation error:', err);
      alert('Error al redirigir. Por favor, inténtelo de nuevo.');
    });
  }

  private navigateTo(route: string): void {
    if (route) {
      this.router.navigate([route]).catch(err => {
        console.error('Navigation error:', err);
        alert('Error al redirigir. Por favor, inténtelo de nuevo.');
      });
    } else {
      console.warn('Invalid route provided.');
    }
  }
}
