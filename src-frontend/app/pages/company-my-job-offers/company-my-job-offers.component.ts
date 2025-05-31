import { Component } from '@angular/core';
import { CompanySidebarComponent } from '../../shared/components/company-sidebar/company-sidebar.component';
import { AvatarModule } from 'primeng/avatar';
import { InputIconModule } from 'primeng/inputicon';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { MenubarModule } from 'primeng/menubar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-company-my-job-offers',
  imports: [CompanySidebarComponent, AvatarModule, MenubarModule, TableModule, ButtonModule,
      InputTextModule, IconFieldModule, InputIconModule, MultiSelectModule, SliderModule,
      SelectModule, ProgressBarModule, TagModule, FormsModule, DatePipe, CommonModule, TagModule, RouterLink],
  templateUrl: './company-my-job-offers.component.html',
  styleUrl: './company-my-job-offers.component.css'
})
export class CompanyMyJobOffersComponent {
  loading = false;

  jobOffers = [
    {
      name: 'Desarrollador Frontend',
      email: 'frontend@empresa.com',
      phone: 123456789,
      date: new Date('2024-06-01'),
      city: 'Madrid',
      country: 'España',
      modality: 'Presencial',
      salary: 30000,
      description: 'Desarrollo de aplicaciones web con Angular.',
      status: 'Abierta'
    },
    {
      name: 'Ingeniero Backend',
      email: 'backend@empresa.com',
      phone: 987654321,
      date: new Date('2024-05-15'),
      city: 'Barcelona',
      country: 'España',
      modality: 'Remoto',
      salary: 35000,
      description: 'Desarrollo de APIs y microservicios con Node.js.',
      status: 'Cerrada'
    },
    {
      name: 'Diseñador UX/UI',
      email: 'uxui@empresa.com',
      phone: null,
      date: new Date('2024-06-10'),
      city: 'Valencia',
      country: 'España',
      modality: 'Híbrido',
      salary: 28000,
      description: 'Diseño de interfaces y experiencia de usuario.',
      status: 'Pausada'
    },
    {
      name: 'Diseñador UX/UI',
      email: 'uxui@empresa.com',
      phone: null,
      date: new Date('2024-06-10'),
      city: 'Bogotá',
      country: 'Colombia',
      modality: 'Híbrido',
      salary: 15000,
      description: 'Diseño de interfaces y experiencia de usuario.',
      status: 'Pausada'
    },
    {
      name: 'Desarrollador Frontend',
      email: 'frontend@empresa.com',
      phone: 123456789,
      date: new Date('2024-06-01'),
      city: 'Madrid',
      country: 'España',
      modality: 'Presencial',
      salary: 30000,
      description: 'Desarrollo de aplicaciones web con Angular.',
      status: 'Abierta'
    },
    {
      name: 'Desarrollador Frontend',
      email: 'frontend@empresa.com',
      phone: 123456789,
      date: new Date('2024-06-01'),
      city: 'Madrid',
      country: 'España',
      modality: 'Presencial',
      salary: 30000,
      description: 'Desarrollo de aplicaciones web con Angular.',
      status: 'Cerrada'
    },
  ];
}