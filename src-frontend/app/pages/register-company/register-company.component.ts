import { Component, ViewChild } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { NavBarHomeComponent } from '../../shared/components/nav-bar-home/nav-bar-home.component';
import { FormsModule, NgModel } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';
import { SelectModule } from 'primeng/select';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { PasswordModule } from 'primeng/password';
import { Router } from '@angular/router';
@Component({
  standalone: true, // <-- ESTA LÍNEA ES CLAVE
  selector: 'app-register-company',
  imports: [
    NavBarHomeComponent,
    InputNumberModule,
    FormsModule,
    FloatLabel,
    DropdownModule,
    SelectModule,
    FileUploadModule,
    CommonModule,
    ButtonModule,
    HttpClientModule,
    PasswordModule,
  ],
  providers: [MessageService],
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css'],
})
export class RegisterCompanyComponent {
  constructor(private messageService: MessageService, private router: Router) {
  }
  goToStudentHome() {
    this.router.navigate(['/ruta-home-estudiante']); 
  }
  NIT: number | undefined;
  nameCompany: string = '';
  phoneNumber: number | undefined;
  addressCompany: string = '';
  nameComplete: string = '';
  lastName: string = '';
  phoneNumberContact: number | undefined;
  pageWeb: string = '';
  citizenshipCard: number | undefined;
  selectEconomicSector: string = '';
  password: string = '';
  confirmPassword: string = '';
  economicSector: any = [
    { id: 1, name: 'Desarrollo de software' },
    { id: 2, name: 'Comercio electrónico' },
    { id: 3, name: 'Servicios financieros' },
    { id: 4, name: 'Educación y tecnología educativa' },
    { id: 5, name: 'Salud y tecnología médica' },
    { id: 6, name: 'Logística y transporte' },
    { id: 7, name: 'Marketing digital y publicidad' },
    { id: 8, name: 'Consultoría empresarial' },
    { id: 9, name: 'Servicios en la nube e infraestructura TI' },
    { id: 10, name: 'Inteligencia artificial y automatización' },
    { id: 11, name: 'Ciberseguridad' },
    { id: 12, name: 'Recursos humanos y reclutamiento' },
    { id: 13, name: 'Construcción e ingeniería digital' },
    { id: 14, name: 'Energía y sostenibilidad' },
    { id: 15, name: 'Agroindustria tecnológica' },
    { id: 16, name: 'Entretenimiento digital y multimedia' },
    { id: 17, name: 'Realidad virtual y aumentada' },
    { id: 18, name: 'Investigación y desarrollo (I+D)' },
    { id: 19, name: 'Análisis de datos y Big Data' },
    { id: 20, name: 'Gobierno digital y servicios públicos' },
    { id: 21, name: 'Otros' },
  ];

  selectTypeCompany: string = '';
  emailCompany: string = '';
  typeCompany: any = [
    { id: 1, name: 'Privada' },
    { id: 2, name: 'Publica' },
  ];

  selectedCountry: any = '';
  countries: any[] = [
    { code: 'AR', name: 'Argentina' },
    { code: 'MX', name: 'México' },
    { code: 'CL', name: 'Chile' },
    { code: 'CO', name: 'Colombia' },
    { code: 'PE', name: 'Perú' },
    { code: 'ES', name: 'España' },
    { code: 'US', name: 'Estados Unidos' },
    { code: 'BR', name: 'Brasil' },
    { code: 'UY', name: 'Uruguay' },
    { code: 'PY', name: 'Paraguay' },
  ];

  fileName: string = '';
  uploadedFiles: any[] = [];
  documentLabel: string = 'Camara-de-comercio.pdf';
  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.fileName = event.files[0].name;
    this.documentLabel = this.fileName;
    this.messageService.add({
      severity: 'success',
      summary: 'Éxito',
      detail: `Archivo cargado: ${this.fileName}`,
    });
  }

  fileRut: string = '';
  uploadedRut: any[] = [];
  documentRut: string = 'RUT.pdf';

  onUploadRut(event: any) {
    for (let file of event.files) {
      this.uploadedRut.push(file);
    }

    this.fileRut = event.files[0].name;
    this.documentRut = this.fileRut;

    this.messageService.add({
      severity: 'success',
      summary: 'Éxito',
      detail: `Archivo cargado: ${this.fileRut}`,
    });
  }

  approvalLicense: string = '';
  uploadedApprovalLicense: any[] = [];
  documentApprovalLicense: string = 'Licencia-de-aprobacion.pdf';

  onUploadApprovalLicense(event: any) {
    for (let file of event.files) {
      this.uploadedApprovalLicense.push(file);
    }

    this.approvalLicense = event.files[0].name;
    this.documentApprovalLicense = this.approvalLicense;

    this.messageService.add({
      severity: 'success',
      summary: 'Éxito',
      detail: `Archivo cargado: ${this.approvalLicense}`,
    });
  }

  idDocument: string = '';
  uploadedIdDocument: any[] = [];
  displayedIdDocumentName: string = 'Cédula.pdf';

  jobCertificate: string = '';
  uploadedJobCertificate: any[] = [];
  displayedJobCertificateName: string = 'Certificado-del-representante.pdf';

  onUploadIdDocument(event: any) {
    for (let file of event.files) {
      this.uploadedIdDocument.push(file);
    }

    this.idDocument = event.files[0].name;
    this.displayedIdDocumentName = this.idDocument;

    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: `File uploaded: ${this.idDocument}`,
    });
  }

  onUploadJobCertificate(event: any) {
    for (let file of event.files) {
      this.uploadedJobCertificate.push(file);
    }

    this.jobCertificate = event.files[0].name;
    this.displayedJobCertificateName = this.jobCertificate;

    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: `File uploaded: ${this.jobCertificate}`,
    });
  }

  validarFormulario(): void {}
}
