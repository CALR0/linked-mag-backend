// auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiBaseUrl; // Ej: http://localhost:3000/api

  constructor(private http: HttpClient) {}

  login(studentCode: string, password: string) {
    return this.http.post(`${this.apiUrl}/students/login`, {
      studentCode,
      password,
    });
  }

  // Guardar token y datos del usuario en localStorage
  saveAuthData(token: string, student: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('student', JSON.stringify(student));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('student');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // Devuelve true si hay un token, false si no
  }
}
