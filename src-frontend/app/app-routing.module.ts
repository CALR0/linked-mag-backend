import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterStudentComponent } from './pages/register-student/register-student.component';
import { LoginStudentComponent } from './pages/login-student/login-student.component';

const routes: Routes = [
  { path: 'login/student', component: LoginStudentComponent },
  { path: 'register/student', component: RegisterStudentComponent },
  // ...existing routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
