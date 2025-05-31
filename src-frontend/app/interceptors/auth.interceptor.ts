// src/app/interceptors/auth.interceptor.ts
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  // Lista de rutas protegidas donde debe agregarse el token
  const protectedRoutes = [
    // Rutas de Company
    `${environment.apiBaseUrl}/company`,
    
    // Rutas de Curriculum Vitae
    `${environment.apiBaseUrl}/curriculumVitae`,
    
    // Rutas de Postulaciones
    `${environment.apiBaseUrl}/postulation`,
    
    // Rutas de Ofertas
    `${environment.apiBaseUrl}/offer`,
    
    // Rutas de Estudiantes (excepto login/register)
    `${environment.apiBaseUrl}/student`,
  ];

  // Rutas explícitamente no protegidas
  const unProtectedRoutes = [
    // Autenticación de estudiantes
    `${environment.apiBaseUrl}/student/login`,
    `${environment.apiBaseUrl}/student/`,
    
    // Otras rutas públicas si las hay
    // `${environment.apiBaseUrl}/public-endpoint`
  ];

  // Verifica si es una ruta protegida Y no está en las no protegidas
  const isProtected = protectedRoutes.some(url => req.url.startsWith(url)) &&
                     !unProtectedRoutes.some(url => req.url.startsWith(url));

  if (token && isProtected) {
    const cloned = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(cloned);
  }

  return next(req);
}