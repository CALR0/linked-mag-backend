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
import { UniversityValidateSeeCompanyComponent } from '../university-validate-see-company/university-validate-see-company.component';
@Component({
  selector: 'app-university-validate-registration-company',
  imports: [SidebarUniversityComponent, MenubarModule, AvatarModule, AvatarModule, MenubarModule, TableModule, ButtonModule,
      InputTextModule, IconFieldModule, InputIconModule, MultiSelectModule, SliderModule,
      SelectModule, ProgressBarModule, TagModule, FormsModule, DatePipe, CommonModule, UniversityValidateSeeCompanyComponent],
  templateUrl: './university-validate-registration-company.component.html',
  styleUrl: './university-validate-registration-company.component.css'
})
export class UniversityValidateRegistrationCompanyComponent {

  loading = false;
  visible: boolean = false;
  applications = [
  {
    nameCompany: 'Ecopetrol S.A.S',
    NIT: '123456789',
    date: '2023-05-01',
    email: 'Ecopetrol@gmail.com',
  },{
    nameCompany: 'Incolab Servicios S.A.S',
    NIT: '98765008765',
    date: '2024-07-22',
    email: 'IncolabSAS@gmail.com',
  }
]
showDialog() {
    this.visible = true;
  }

}
