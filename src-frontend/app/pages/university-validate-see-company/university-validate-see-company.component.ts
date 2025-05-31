import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { DialogModule } from 'primeng/dialog';
import { EditorModule } from 'primeng/editor';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-university-validate-see-company',
  imports: [
    ButtonModule,
    DialogModule,
    InputTextModule,
    EditorModule,
    FormsModule,
    DatePickerModule,
    SelectModule,
    KeyFilterModule,
    InputNumberModule,
  ],
  templateUrl: './university-validate-see-company.component.html',
  styleUrl: './university-validate-see-company.component.css',
})
export class UniversityValidateSeeCompanyComponent {
  name: string = '';
  email: string = '';
  phone: number | null = null;
  date: Date | null = null;
  city: string = '';
  country: string = '';
  modality: string = '';
  salary: number | null = null;
  description: string = '';
  visible: boolean = false;

  modalities: any[] = [
    { name: 'Presencial' },
    { name: 'Híbrido' },
    { name: 'Remoto' },
  ];

  companys = [
    {
      companyName: 'Ecopetrol S.A',
      email: 'Ecopetrol@gmail.com',
      phoneNumber: '+57 320 123 4567',
      closingDate: 'Nov 14, 2021 07:00 AM',
      modality: 'Remoto',
      city: 'Santa Marta',
      salary: '1500000',
      description:
        'Requerimientos: experiencia en Java, SQL, HTML, CSS y JavaScript para el desarrollo de aplicaciones web',
    },
    {
      companyName: 'Globant',
      email: 'careers@globant.com',
      phoneNumber: '+57 300 456 7890',
      closingDate: 'Jul 10, 2025 05:00 PM',
      modality: 'Presencial',
      city: 'Bogotá',
      salary: '3200000',
      description:
        'Buscamos desarrolladores con experiencia en React, Node.js y PostgreSQL para integrar equipos ágiles de trabajo.',
    },
    {
      companyName: 'Google Colombia',
      email: 'contact@google.com',
      phoneNumber: '+57 310 789 6543',
      closingDate: 'Aug 1, 2025 11:59 PM',
      modality: 'Híbrido',
      city: 'Medellín',
      salary: '4500000',
      description:
        'Únete al equipo de innovación trabajando en soluciones cloud y herramientas de IA. Se requiere dominio de Python y experiencia en backend.',
    },
  ];

  cities: any[] = [
    { name: 'Madrid' },
    { name: 'Bogotá' },
    { name: 'Londres' },
    { name: 'New York' },
  ];

  selectedCompany = this.companys[0]; // Por defecto la primera, o null

  showDialog() {
    this.visible = true;
  }
}
