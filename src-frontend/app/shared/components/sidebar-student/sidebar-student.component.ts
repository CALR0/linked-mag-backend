import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-sidebar-student',
  imports: [DrawerModule, RouterModule],
  templateUrl: './sidebar-student.component.html',
  styleUrl: './sidebar-student.component.css'
})
export class SidebarStudentComponent {
  visible: boolean = true;
}
