import { Component, ViewChild, OnInit } from '@angular/core';
import { SidebarStudentComponent } from '../../shared/components/sidebar-student/sidebar-student.component';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { SelectModule } from 'primeng/select';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeEsCO from '@angular/common/locales/es-CO';
import { RouterLink } from '@angular/router';
import { StudentApplyOfferComponent } from '../student-apply-offer/student-apply-offer.component';
import { ApiService } from '../../services/api.service'; // Import ApiService

registerLocaleData(localeEsCO, 'es-CO');

@Component({
  selector: 'app-student-offers',
  standalone: true,
  imports: [
    SidebarStudentComponent, AvatarModule, MenubarModule, TableModule, ButtonModule,
    InputTextModule, IconFieldModule, InputIconModule, MultiSelectModule, SliderModule,
    SelectModule, ProgressBarModule, TagModule, FormsModule, DatePipe, CurrencyPipe, StudentApplyOfferComponent
  ],
  templateUrl: './student-offers.component.html',
  styleUrl: './student-offers.component.css'
})
export class StudentOffersComponent implements OnInit {

  
  loading = false;
  searchTerm = '';
  value = 0;
 customers = [
  {
    name: 'Practicante Ing. de Sistemas - Desarrollo de Software',
    location: 'Santa Marta, Magdalena',
    date: new Date('2021-11-14T07:00:00'),
    salary: 1500000
  },
  {
    name: 'Desarrollador backend jr con nodejs',
    location: '- Silicon Valley California',
    date: new Date('2025-03-14T07:00:00'),
    salary: 4500000
  },{
    name: 'Desarrollador backend jr con nodejs',
    location: '- Silicon Valley California',
    date: new Date('2025-03-14T07:00:00'),
    salary: 4500000
  },
  {
    name: 'Desarrollador backend jr con Node.js',
    location: 'Medellín, Colombia',
    date: new Date('2025-03-14T07:00:00'),
    salary: 4500000
  },
  {
    name: 'Ingeniero de datos junior con Python y SQL',
    location: 'Bogotá, Colombia',
    date: new Date('2025-02-10T08:00:00'),
    salary: 4200000
  },
  {
    name: 'Desarrollador frontend junior con React',
    location: 'Cali, Colombia',
    date: new Date('2025-01-25T09:00:00'),
    salary: 3900000
  },
  {
    name: 'Analista QA junior manual y automatizado',
    location: 'Barranquilla, Colombia',
    resultados: 'Diseño de planes de prueba y reporte de bugs',
    date: new Date('2025-04-01T08:30:00'),
    salary: 3700000
  },
  {
    name: 'Soporte técnico nivel 1 con enfoque en software',
    location: 'Pereira, Colombia',
    date: new Date('2025-03-05T07:00:00'),
    salary: 3400000
  },
  {
    name: 'Desarrollador backend jr con Django',
    location: 'Manizales, Colombia',
    date: new Date('2025-02-20T10:00:00'),
    salary: 4100000
  },
  {
    name: 'Analista de datos junior con Power BI',
    location: 'Cartagena, Colombia',
    date: new Date('2025-01-30T09:00:00'),
    salary: 4000000
  },
  {
    name: 'DevOps junior con conocimientos en AWS',
    location: 'Ibagué, Colombia',
    date: new Date('2025-05-15T08:45:00'),
    salary: 4300000
  },
  {
    name: 'Ingeniero de soporte en infraestructura junior',
    location: 'Cúcuta, Colombia',
    date: new Date('2025-04-12T07:30:00'),
    salary: 3600000
  },
  {
    name: 'Desarrollador fullstack junior (React + Node.js)',
    location: 'Bucaramanga, Colombia',
    date: new Date('2025-03-28T08:00:00'),
    salary: 4400000
  }
]
  // ...más objetos

  representatives = [
    { name: 'Empresa ABC', image: 'amyelsner.png' },
    { name: 'Empresa XYZ', image: 'onyamalimba.png' },
    // ...más empresas
  ];

  statuses = [
    { label: 'Disponible', value: 'Disponible' },
    { label: 'Cerrada', value: 'Cerrada' }
  ];

  dynamicOffers: any[] = []; // Array to store offers from the backend

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchOffers();
  }

  fetchOffers(): void {
    this.loading = true;
    this.apiService.getAllOffers().subscribe({
      next: (offers: any[]) => {
        this.dynamicOffers = offers.map((offer: any) => ({
          id: offer.id,
          title: offer.title,
          description: offer.description,
          modality: offer.modality,
          location: offer.location,
          publicationDate: offer.publicationDate,
          closingDate: offer.closingDate,
          salary: offer.salary,
          companyName: offer.company?.name,
          status: offer.status?.status
        }));
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching offers:', error);
        this.loading = false;
      },
      complete: () => {
        console.log('Fetch offers completed');
      }
    });
  }

  get combinedOffers(): any[] {
    return [...this.customers, ...this.dynamicOffers];
  }

  clear(table: any) {
    table.clear();
  }
}