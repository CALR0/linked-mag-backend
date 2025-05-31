import { Component } from '@angular/core';
import { CompanySidebarComponent } from '../../shared/components/company-sidebar/company-sidebar.component';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CompanyDialogApplicationsComponent } from '../company-dialog-applications/company-dialog-applications.component';

@Component({
  selector: 'app-dashboard-company',
  imports: [CompanySidebarComponent, MenubarModule, BadgeModule,
    InputTextModule, AvatarModule, RippleModule, CardModule, PanelModule,
    ButtonModule, CompanyDialogApplicationsComponent],
  templateUrl: './dashboard-company.component.html',
  styleUrl: './dashboard-company.component.css'
})
export class DashboardCompanyComponent {

}
