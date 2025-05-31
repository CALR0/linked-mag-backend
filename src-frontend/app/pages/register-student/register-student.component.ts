import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { NavBarHomeComponent } from '../../shared/components/nav-bar-home/nav-bar-home.component';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-student',
  standalone: true,
  imports: [
    NavBarHomeComponent,
    ButtonModule,
    FloatLabelModule,
    FormsModule,
    TextareaModule,
    DropdownModule,
    SelectModule,
    ToastModule,
    MenuModule,
    DividerModule,
    PasswordModule,
    InputTextModule,
  ],
  providers: [MessageService],
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css'],
})
export class RegisterStudentComponent {
  constructor(
    private messageService: MessageService,
    private apiService: ApiService,
    private router: Router
  ) {}
  name: string = '';
  email: string = '';
  selectPrograma: any;
  studentCode: string = '';
  password: string = '';
  confirmPassword: string = '';
  academicPrograms: any[] = [
    { name: 'Administración de Empresas', code: '19781' },
    { name: 'Antropología', code: '9687' },
    { name: 'Cine y Audiovisuales', code: '12159' },
    { name: 'Contaduría Pública', code: '11958' },
    { name: 'Derecho', code: '17866' },
    { name: 'Economía', code: '882' },
    { name: 'Enfermería', code: '10062' },
    { name: 'Historia y Patrimonio', code: '108563' },
    { name: 'Ingeniería Agronómica', code: '885' },
    { name: 'Ingeniería Ambiental y Sanitaria', code: '11221' },
    { name: 'Ingeniería Civil', code: '7112' },
    { name: 'Ingeniería de Sistemas', code: '3147' },
    { name: 'Ingeniería Electrónica', code: '20409' },
    { name: 'Ingeniería Industrial', code: '9853' },
    { name: 'Ingeniería Marino-Costera', code: '116006' },
    { name: 'Ingeniería Pesquera', code: '884' },
    { name: 'Licenciatura en Artes', code: '109379' },
    {
      name: 'Licenciatura en Ciencias Naturales y Educación Ambiental',
      code: '108279',
    },
    { name: 'Licenciatura en Educación Campesina y Rural', code: '108301' },
    { name: 'Licenciatura en Educación Infantil', code: '108967' },
    { name: 'Licenciatura en Etnoeducación', code: '109380' },
    { name: 'Licenciatura en Informática', code: '11420' },
    {
      name: 'Licenciatura en Lenguas Extranjeras con Énfasis en Inglés',
      code: '108302',
    },
    { name: 'Licenciatura en Literatura y Lengua Castellana', code: '108278' },
    { name: 'Licenciatura en Matemáticas', code: '108277' },
    { name: 'Licenciatura en Preescolar', code: '11410' },
    { name: 'Licenciatura en Química', code: '109378' },
    { name: 'Licenciatura en Tecnología', code: '109090' },
    { name: 'Medicina', code: '10059' },
    { name: 'Negocios Internacionales', code: '12008' },
    { name: 'Odontología', code: '9672' },
    { name: 'Psicología', code: '11805' },
  ];

  validarFormulario(): void {
    // 1. Validación de campos obligatorios
    if (!this.validarCamposObligatorios()) return;

    // 2. Validación de formato de correo
    if (!this.validarCorreoInstitucional()) return;

    // 3. Validación de código estudiantil
    if (!this.validarCodigoEstudiantil()) return;

    // 4. Validación de contraseñas
    if (!this.validarContrasenas()) return;

    // Si pasa todas las validaciones
    this.registrarEstudiante();
  }

  // ----------------------------
  // Métodos auxiliares de validación
  // ----------------------------

  private validarCamposObligatorios(): boolean {
    if (
      !this.name.trim() ||
      !this.email.trim() ||
      !this.selectPrograma ||
      !this.studentCode.trim() ||
      !this.password ||
      !this.confirmPassword
    ) {
      this.mostrarError('Todos los campos son obligatorios');
      return false;
    }
    return true;
  }

  private validarCorreoInstitucional(): boolean {
    const correoValido = /^[a-zA-Z0-9._%+-]+@unimagdalena\.edu\.co$/;
    if (!correoValido.test(this.email)) {
      this.mostrarError(
        'El correo debe ser institucional (@unimagdalena.edu.co)'
      );
      return false;
    }
    return true;
  }

  private validarCodigoEstudiantil(): boolean {
    // Validación de que sea numérico
    if (!/^\d+$/.test(this.studentCode.trim())) {
      this.mostrarError(
        'El código estudiantil debe ser solo numérico y sin espacios'
      );
      return false;
    }

    // Validación de longitud
    if (this.studentCode.trim().length !== 10) {
      this.mostrarError('El código estudiantil debe tener 10 dígitos');
      return false;
    }

    return true;
  }

  private validarContrasenas(): boolean {
    const claveSegura =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@?#\$%\^&\*])(?=.{8,})/;

    // Validación de coincidencia
    if (this.password !== this.confirmPassword) {
      this.mostrarError('Verifica que ambas contraseñas sean iguales');
      return false;
    }

    // Validación de fortaleza
    if (!claveSegura.test(this.password)) {
      this.mostrarWarning(
        'Debe tener al menos 8 caracteres',
        'Incluye mayúsculas, minúsculas, números y símbolos'
      );
      return false;
    }

    return true;
  }

  // ----------------------------
  // Métodos auxiliares de UI
  // ----------------------------

  private mostrarError(detalle: string, resumen: string = 'Error'): void {
    this.messageService.add({
      severity: 'error',
      summary: resumen,
      detail: detalle,
    });
  }

  private mostrarWarning(
    detalle: string,
    resumen: string = 'Advertencia'
  ): void {
    this.messageService.add({
      severity: 'warn',
      summary: resumen,
      detail: detalle,
    });
  }

  // ----------------------------
  // Método para registrar estudiante
  // ----------------------------
  private registrarEstudiante(): void {
    const studentData = {
      name: this.name,
      email: this.email,
      studentCode: this.studentCode,
      password: this.password,
      academicProgram: {
        name: this.selectPrograma.name,
        code: this.selectPrograma.code,
      },
    };

    this.apiService.registerStudent(studentData).subscribe({
      next: () => {
        this.mostrarExito('Estudiante registrado correctamente');
        this.limpiarCampos();
        // Redirigir después de 2 segundos (opcional)
        setTimeout(() => {
          this.router.navigate(['/login/student']); // O la ruta que prefieras
        }, 2000);
      },
      error: (err) => {
        const mensajeError =
          err.error?.message || 'Error al conectar con el servidor';
        this.mostrarError(mensajeError, 'Error en el registro');
      },
    });
  }

  private mostrarExito(detalle: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Éxito',
      detail: detalle,
    });
  }

  private limpiarCampos(): void {
    this.name = '';
    this.email = '';
    this.selectPrograma = null;
    this.studentCode = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
