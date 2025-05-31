import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegisterStudentComponent } from './pages/register-student/register-student.component';
import { LoginStudentComponent } from './pages/login-student/login-student.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardCompanyComponent } from './pages/dashboard-company/dashboard-company.component';
import { DashboardStudentComponent } from './pages/dashboard-student/dashboard-student.component';
import { RegisterCompanyComponent } from './pages/register-company/register-company.component';
import { LoginCompanyComponent } from './pages/login-company/login-company.component';
import { StudentOffersComponent } from './pages/student-offers/student-offers.component';
import { StudentMyApplicationsComponent } from './pages/student-my-applications/student-my-applications.component';
import { StudentApplyOfferComponent } from './pages/student-apply-offer/student-apply-offer.component';
import { JobOfferDetailsComponent } from './pages/job-offer-details/job-offer-details.component';
import { authGuard } from './guards/auth.guard';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { UniversityLoginComponent } from './pages/university-login/university-login.component';
import { UniversityValidateRegistrationComponent } from './pages/university-validate-registration/university-validate-registration.component';
import { UniversityValidateRegistrationCompanyComponent } from './pages/university-validate-registration-company/university-validate-registration-company.component';
import { CompanyMyJobOffersComponent } from './pages/company-my-job-offers/company-my-job-offers.component';
import { CompanyProfileComponent } from './pages/company-profile/company-profile.component';
export const routes: Routes = [

  // Ruta raíz redirige a home
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Página principal
  { path: 'home', component: HomeComponent },

  // Registro
  {
    path: 'register',
    children: [
      { path: 'student', component: RegisterStudentComponent },
      { path: 'company', component: RegisterCompanyComponent }
    ]
  },

  // Login
  {
    path: 'login',
    children: [
      { path: 'student', component: LoginStudentComponent },
      { path: 'company', component: LoginCompanyComponent },
      { path: 'university', component: UniversityLoginComponent }
    ]
  },

  // Panel estudiante
  {
    path: 'panel/student',
    children: [
      { path: 'home', component: DashboardStudentComponent},
      { path: 'offers', component: StudentOffersComponent,
        children: [
          { path: 'dialog', component: StudentApplyOfferComponent }]
      },
      { path: 'my-applications', component: StudentMyApplicationsComponent, canActivate: [authGuard] },
      { path: 'my-profile', component: StudentMyApplicationsComponent, canActivate: [authGuard]  },
      { path: 'profile', component: StudentProfileComponent, canActivate: [authGuard] }
    ]
  },

  // Panel empresa
  {
    path: 'panel/company',
    children: [
      { path: 'home', component: DashboardCompanyComponent},
      { path: 'my-offers', component:  CompanyMyJobOffersComponent,},
      { path: 'configuration', component:  DashboardCompanyComponent},
      { path: 'job-offer', component: JobOfferDetailsComponent},
      { path: 'profile', component: CompanyProfileComponent }
    ]
  },

  // panel universidad
  {
    path: 'panel/university',
    children: [
      { path: 'validate-registration', component: UniversityValidateRegistrationComponent},
      { path: 'validate-registration-company', component: UniversityValidateRegistrationCompanyComponent }
    ]
  },


  // Ruta 404 (última siempre)
  { path: '**', component: NotFoundComponent },
];