import { Component } from '@angular/core';
import { SidebarUniversityComponent } from '../../shared/components/sidebar-university/sidebar-university.component';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
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
import { CommonModule, DatePipe } from '@angular/common';


@Component({
  selector: 'app-university-validate-registration', 
  imports: [SidebarUniversityComponent, MenubarModule, AvatarModule, AvatarModule, MenubarModule, TableModule, ButtonModule,
      InputTextModule, IconFieldModule, InputIconModule, MultiSelectModule, SliderModule,
      SelectModule, ProgressBarModule, TagModule, FormsModule, DatePipe, CommonModule],
  templateUrl: './university-validate-registration.component.html',
  styleUrl: './university-validate-registration.component.css'
})
export class UniversityValidateRegistrationComponent {

     loading = false;

  applications = [
  {
    nameStudent: 'Carlos Andrés Lizarazo Romero',
    code: '2021113344',
    date: '2023-05-01',
    academicProgram: 'Ingeniería de Sistemas',
  },
  {
    nameStudent: 'Karla María Giraldo Lopez',
    code: '2024113344',
    date: '2023-05-01',
    academicProgram: 'Ingeniería de sistemas',
  }
]



}
