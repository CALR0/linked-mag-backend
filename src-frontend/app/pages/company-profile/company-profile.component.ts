import { Component } from '@angular/core';
import { SidebarStudentComponent } from '../../shared/components/sidebar-student/sidebar-student.component';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FileUpload } from 'primeng/fileupload';
import { Router } from '@angular/router';
import { CompanySidebarComponent } from '../../shared/components/company-sidebar/company-sidebar.component';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css'],
  imports: [
    CompanySidebarComponent,
    MenubarModule,
    CommonModule,
    AvatarModule,
    PanelModule,
    BadgeModule,
    InputTextModule,
    FormsModule,
    FloatLabel,
    HttpClientModule,
    DropdownModule,
    FloatLabelModule,
    DialogModule,
    ButtonModule,
    FileUpload,
  ],
  standalone: true,
})
export class CompanyProfileComponent {
  constructor(private router: Router) {}

  showExperienceDialog = false;
  profileImageUrl: string = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
  bannerImageUrl: string = 'https://concepto.de/wp-content/uploads/2014/08/empresa-2-e1551381652195.jpg';

  companyProfile = {
    name: 'Soluciones Innovadoras S.A.S.',
    email: 'contacto@soluciones.com',
    phoneNumber: 3012345678,
    nit: '900123456-7',
    address: 'Cra 45 #12-34',
    city: 'Santa Marta',
    department: 'Magdalena',
    description: 'Empresa dedicada al desarrollo de soluciones tecnológicas a medida.',
    socialMedias: [
      { name: 'LinkedIn', icon: 'pi pi-linkedin', url: 'https://linkedin.com/' },
      { name: 'Twitter', icon: 'pi pi-twitter', url: 'https://twitter.com/' },
    ]
  };

  departments = [
    { name: 'Magdalena', code: '19' },
    { name: 'Atlántico', code: '4' },
    { name: 'Bogotá', code: '14' }
  ];

  capitalCities = [
    { name: 'Santa Marta', code: '19' },
    { name: 'Barranquilla', code: '4' },
    { name: 'Bogotá', code: '14' }
  ];

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

  goToCompanyHome() {
    this.router.navigate(['/panel/company/home']);
  }
}
