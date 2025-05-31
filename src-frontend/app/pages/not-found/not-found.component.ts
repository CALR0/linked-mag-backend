import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-not-found',
  imports: [ButtonModule, RouterLink],
  template: `
    <div class="flex flex-col items-center justify-center min-h-screen bg-[linear-gradient(to_bottom,#6366f1,#1e3a8a)] text-white">
      <img class="logo" src="assets/logo-recortado.png" alt="logo-linkedmag" />
      <h1 class="text-8xl font-bold mb-4">404</h1>
      <p class="text-2xl mb-6">Lo sentimos, página no encontrada</p>
      <p-button [routerLink]="['/home']" label="Volver al inicio" [rounded]="true" severity="help" />
    </div>
  `,
  styles: [
    `
      .logo {
        height: 100px;
      }
    `
  ]
})
export class NotFoundComponent {}