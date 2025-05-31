import { Component } from '@angular/core';
import { SidebarStudentComponent } from '../../shared/components/sidebar-student/sidebar-student.component';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, NgModel } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { HttpClientModule } from '@angular/common/http';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FileUpload } from 'primeng/fileupload';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student-profile.component.html',
  imports: [SidebarStudentComponent, MenubarModule, 
    CommonModule, AvatarModule, PanelModule, BadgeModule, InputTextModule, FormsModule, FloatLabel, HttpClientModule, 
    InputNumberModule, DropdownModule, FloatLabelModule, MultiSelectModule,  DialogModule, ButtonModule, FileUpload],
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent {
  constructor(private router: Router) {}
  showSkillsDialog = false;
  showExperienceDialog = false;
  profileImageUrl: string = 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png';
  goToStudentHome() {
    this.router.navigate(['/panel/student/home']); 
  }

onProfileImageChange(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.profileImageUrl = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

bannerImageUrl: string = 'https://concepto.de/wp-content/uploads/2014/08/empresa-2-e1551381652195.jpg';

onBannerImageChange(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.bannerImageUrl = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}


  // Sample data for the student profile
  studentProfile = {
    name: 'María Inés',
    lastName: 'Lopez Serrano',
    email: 'Rkx5f@example.com',
    phoneNumber: 320840290,
    studentCode: 123456789,
    citizenshipcard: 1234512345,
    adrress: 'Calle 123',
    birthdate: new Date('1995-05-15'),
    city: 'Santa Marta',
    department: 'Magdalena',
    languages : [
      { codigo: 'es', nombre: 'Español', nivel: 'Nativo' },
      { codigo: 'gb', nombre: 'Inglés', nivel: 'Avanzado' },
      { codigo: 'pt', nombre: 'Portugués', nivel: 'Básico' },
    ],
    socialMedias: [
      { name: 'Facebook', icon: 'pi pi-facebook', url: 'https://www.facebook.com/' },
      { name: 'Twitter', icon: 'pi pi-twitter', url: 'https://twitter.com/' },
      { name: 'Instagram', icon: 'pi pi-instagram', url: 'https://www.instagram.com/' },
      { name: 'GitHub', icon: 'pi pi-github', url: 'https://github.com/' }
    ],
    selectProgram: [
      { name: 'Ingeniería de sistemas', code: '19781' },
    ]
  }

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
      { name: 'Licenciatura en Ciencias Naturales y Educación Ambiental', code: '108279' },
      { name: 'Licenciatura en Educación Campesina y Rural', code: '108301' },
      { name: 'Licenciatura en Educación Infantil', code: '108967' },
      { name: 'Licenciatura en Etnoeducación', code: '109380' },
      { name: 'Licenciatura en Informática', code: '11420' },
      { name: 'Licenciatura en Lenguas Extranjeras con Énfasis en Inglés', code: '108302' },
      { name: 'Licenciatura en Literatura y Lengua Castellana', code: '108278' },
      { name: 'Licenciatura en Matemáticas', code: '108277' },
      { name: 'Licenciatura en Preescolar', code: '11410' },
      { name: 'Licenciatura en Química', code: '109378' },
      { name: 'Licenciatura en Tecnología', code: '109090' },
      { name: 'Medicina', code: '10059' },
      { name: 'Negocios Internacionales', code: '12008' },
      { name: 'Odontología', code: '9672' },
      { name: 'Psicología', code: '11805' }
  ];

  capitalCities: any[] = [
  { name: 'Leticia', code: '1' },
  { name: 'Medellín', code: '2' },
  { name: 'Arauca', code: '3' },
  { name: 'Barranquilla', code: '4' },
  { name: 'Cartagena de Indias', code: '5' },
  { name: 'Tunja', code: '6' },
  { name: 'Manizales', code: '7' },
  { name: 'Florencia', code: '8' },
  { name: 'Yopal', code: '9' },
  { name: 'Popayán', code: '10' },
  { name: 'Valledupar', code: '11' },
  { name: 'Quibdó', code: '12' },
  { name: 'Montería', code: '13' },
  { name: 'Bogotá', code: '14' },
  { name: 'Inírida', code: '15' },
  { name: 'San José del Guaviare', code: '16' },
  { name: 'Neiva', code: '17' },
  { name: 'Riohacha', code: '18' },
  { name: 'Santa Marta', code: '19' },
  { name: 'Villavicencio', code: '20' },
  { name: 'Pasto', code: '21' },
  { name: 'San Andrés', code: '22' },
  { name: 'Cúcuta', code: '23' },
  { name: 'Mocoa', code: '24' },
  { name: 'Armenia', code: '25' },
  { name: 'Pereira', code: '26' },
  { name: 'Bucaramanga', code: '27' },
  { name: 'Sincelejo', code: '28' },
  { name: 'Ibagué', code: '29' },
  { name: 'Cali', code: '30' },
  { name: 'Mitú', code: '31' },
  { name: 'Puerto Carreño', code: '32' }
  ];

  departments: any[] = [
  { name: 'Amazonas', code: '1' },
  { name: 'Antioquia', code: '2' },
  { name: 'Arauca', code: '3' },
  { name: 'Atlántico', code: '4' },
  { name: 'Bolívar', code: '5' },
  { name: 'Boyacá', code: '6' },
  { name: 'Caldas', code: '7' },
  { name: 'Caquetá', code: '8' },
  { name: 'Casanare', code: '9' },
  { name: 'Cauca', code: '10' },
  { name: 'Cesar', code: '11' },
  { name: 'Chocó', code: '12' },
  { name: 'Córdoba', code: '13' },
  { name: 'Cundinamarca', code: '14' },
  { name: 'Guainía', code: '15' },
  { name: 'Guaviare', code: '16' },
  { name: 'Huila', code: '17' },
  { name: 'La Guajira', code: '18' },
  { name: 'Magdalena', code: '19' },
  { name: 'Meta', code: '20' },
  { name: 'Nariño', code: '21' },
  { name: 'San Andrés y Providencia', code: '22' },
  { name: 'Norte de Santander', code: '23' },
  { name: 'Putumayo', code: '24' },
  { name: 'Quindío', code: '25' },
  { name: 'Risaralda', code: '26' },
  { name: 'Santander', code: '27' },
  { name: 'Sucre', code: '28' },
  { name: 'Tolima', code: '29' },
  { name: 'Valle del Cauca', code: '30' },
  { name: 'Vaupés', code: '31' },
  { name: 'Vichada', code: '32' }
];

  technologyOptions = [
  { name: 'HTML5', logo: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png' },
  { name: 'CSS3', logo: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
  { name: 'JavaScript', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
  { name: 'TypeScript', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png' },
  { name: 'Python', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
  { name: 'Java', logo: 'https://cdn-icons-png.flaticon.com/512/226/226777.png' },
  { name: 'C#', logo: 'https://cdn-icons-png.flaticon.com/512/6132/6132221.png' },
  { name: 'C++', logo: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png' },
  { name: 'PHP', logo: 'https://cdn-icons-png.flaticon.com/512/919/919830.png' },
  { name: 'SQL', logo: 'https://cdn-icons-png.flaticon.com/512/2772/2772128.png' },
  { name: 'Go', logo: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
  { name: 'Rust', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968385.png' },
  { name: 'Kotlin', logo: 'https://cdn-icons-png.flaticon.com/512/919/919831.png' },
  { name: 'Swift', logo: 'https://cdn-icons-png.flaticon.com/512/919/919848.png' },
  { name: 'Ruby', logo: 'https://cdn-icons-png.flaticon.com/512/919/919842.png' },
  { name: 'Dart', logo: 'https://cdn-icons-png.flaticon.com/512/919/919843.png' },
  { name: 'Scala', logo: 'https://cdn-icons-png.flaticon.com/512/919/919837.png' },
  { name: 'Perl', logo: 'https://cdn-icons-png.flaticon.com/512/919/919840.png' },
  { name: 'Haskell', logo: 'https://cdn-icons-png.flaticon.com/512/919/919841.png' },
  { name: 'Elixir', logo: 'https://cdn-icons-png.flaticon.com/512/919/919839.png' },
  { name: 'C', logo: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png' },
  { name: 'Bash', logo: 'https://cdn-icons-png.flaticon.com/512/919/919828.png' },
  { name: 'PowerShell', logo: 'https://cdn-icons-png.flaticon.com/512/919/919832.png' },
  { name: 'Assembly', logo: 'https://cdn-icons-png.flaticon.com/512/919/919827.png' },
  { name: 'MATLAB', logo: 'https://cdn-icons-png.flaticon.com/512/919/919829.png' },
  { name: 'R', logo: 'https://cdn-icons-png.flaticon.com/512/919/919838.png' },
  { name: 'Objective-C', logo: 'https://cdn-icons-png.flaticon.com/512/919/919844.png' },
  { name: 'Visual Basic', logo: 'https://cdn-icons-png.flaticon.com/512/919/919845.png' },
  { name: 'F#', logo: 'https://cdn-icons-png.flaticon.com/512/919/919846.png' },
  { name: 'Erlang', logo: 'https://cdn-icons-png.flaticon.com/512/919/919847.png' },
  { name: 'Lua', logo: 'https://cdn-icons-png.flaticon.com/512/919/919849.png' },
  { name: 'Groovy', logo: 'https://cdn-icons-png.flaticon.com/512/919/919850.png' },
  { name: 'COBOL', logo: 'https://cdn-icons-png.flaticon.com/512/919/919851.png' },
  { name: 'Fortran', logo: 'https://cdn-icons-png.flaticon.com/512/919/919852.png' },
  { name: 'Solidity', logo: 'https://cdn-icons-png.flaticon.com/512/919/919853.png' },
  { name: 'VBA', logo: 'https://cdn-icons-png.flaticon.com/512/919/919854.png' },
  { name: 'Delphi', logo: 'https://cdn-icons-png.flaticon.com/512/919/919855.png' },
  { name: 'Ada', logo: 'https://cdn-icons-png.flaticon.com/512/919/919856.png' },
  { name: 'Crystal', logo: 'https://cdn-icons-png.flaticon.com/512/919/919858.png' },
  { name: 'Zig', logo: 'https://cdn-icons-png.flaticon.com/512/919/919859.png' },
  { name: 'OCaml', logo: 'https://cdn-icons-png.flaticon.com/512/919/919860.png' },
  { name: 'Prolog', logo: 'https://cdn-icons-png.flaticon.com/512/919/919861.png' },
  { name: 'Lisp', logo: 'https://cdn-icons-png.flaticon.com/512/919/919862.png' },
  { name: 'Clojure', logo: 'https://cdn-icons-png.flaticon.com/512/919/919863.png' },
  { name: 'Julia', logo: 'https://cdn-icons-png.flaticon.com/512/919/919864.png' },
  { name: 'SAS', logo: 'https://cdn-icons-png.flaticon.com/512/919/919865.png' },
  { name: 'Shell', logo: 'https://cdn-icons-png.flaticon.com/512/919/919866.png' },
  { name: 'VB.NET', logo: 'https://cdn-icons-png.flaticon.com/512/919/919867.png' },
  { name: 'ABAP', logo: 'https://cdn-icons-png.flaticon.com/512/919/919868.png' }
];


  userSkills : any[] = []; // Se llenará con las selecciones del usuario
  onAcceptSkills() {
    this.showSkillsDialog = false;
  }

  nameCompany = '';
  descriptionOfYourWork: string | null | undefined;
  startDate = null;
  endDate = null;
  documentLabel: string = 'Logo-de-la-empresa(opcional).png';
  uploadedFiles : any[] = [];
  Direccion = 'Calle 123';
  
  onUpload(event: any) {
  for (let file of event.files) {
    this.uploadedFiles.push(file);
  }
  
}

experiences: any[] = [];

  onAcceptExperience() {
    this.experiences.push({
      nameCompany: this.nameCompany,
      descriptionOfYourWork: this.descriptionOfYourWork,
      startDate: this.startDate,
      endDate: this.endDate
    });
    // Limpiar los campos
    this.nameCompany = '';
    this.descriptionOfYourWork = '';
    this.startDate = null;
    this.endDate = null;
    this.showExperienceDialog = false;
    this.Direccion = '';
  }

  documentCV: string = 'Curriculum vitae.pdf';
  uploadedCV: any[] = [];
  onUploadApprovalLicense(event: any) {
  for (let file of event.files) {
    this.uploadedCV.push(file);
  }

}

  
}