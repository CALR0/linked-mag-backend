import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-sidebar-university',
  imports: [DrawerModule, RouterModule],
  templateUrl: './sidebar-university.component.html',
  styleUrl: './sidebar-university.component.css'
})
export class SidebarUniversityComponent {
      visible: boolean = true;
}
