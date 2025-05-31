import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { PasswordModule } from 'primeng/password';
import { NavBarLoginComponent } from '../../shared/components/nav-bar-login/nav-bar-login.component';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-university-login',
  imports: [NavBarLoginComponent, FormsModule, InputGroupModule, PasswordModule],
  templateUrl: './university-login.component.html',
  styleUrl: './university-login.component.css'
})
export class UniversityLoginComponent {
  text1: string = '';
  value: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  login() {
    if (!this.text1 || !this.value) {
      alert('Por favor ingrese usuario y contraseña.');
      return;
    }

    this.apiService.loginStudent({ studentCode: this.text1, password: this.value })
      .subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/panel/student/home']);
        },
        error: (err) => {
          alert('Credenciales inválidas o error en el servidor.');
          console.error(err);
        }
      });
  }
}
