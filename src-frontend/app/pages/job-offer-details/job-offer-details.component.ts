import { Component } from '@angular/core';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import localeEsCO from '@angular/common/locales/es-CO';

import { SidebarStudentComponent } from '../../shared/components/sidebar-student/sidebar-student.component';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { CompanySidebarComponent } from '../../shared/components/company-sidebar/company-sidebar.component';

registerLocaleData(localeEsCO, 'es-CO');

@Component({
selector: 'app-job-offer-details',
standalone: true,
templateUrl: 'job-offer-details.component.html',
styleUrl: 'job-offer-details.component.css',
imports: [
CommonModule,
    CompanySidebarComponent,
AvatarModule,
MenubarModule,
TableModule,
ButtonModule,
InputTextModule,
IconFieldModule,
InputIconModule,
FormsModule,
RippleModule
],
providers: [DatePipe]
})
export class JobOfferDetailsComponent {
loading = false;
searchTerm = '';

students = [
{
id: 1,
fullName: 'Daniel Rodríguez',
studentCode: '202012345',
date: new Date('2025-05-15T10:00:00'),
program: 'Ingeniería de Sistemas',
status: 'APROBADA'
},
{
id: 2,
fullName: 'Laura Gómez',
studentCode: '202034567',
date: new Date('2025-05-14T09:30:00'),
program: 'Ingeniería Industrial',
status: 'EN ESPERA'
},
{
id: 3,
fullName: 'Carlos Torres',
studentCode: '202045678',
date: new Date('2025-05-13T14:15:00'),
program: 'Administración de Empresas',
status: 'DENEGADA'
}
];

getStatusClass(status: string): string {
const statusMap: any = {
'APROBADA': 'approved',
'EN ESPERA': 'pending',
'DENEGADA': 'rejected'
};
return statusMap[status] || '';
}

verDetalles(student: any): void {
console.log('Detalles del estudiante:', student);
}

clear(table: any) {
table.clear();
}

editarTitulo() {
console.log('Editar postulacion:');
}
}