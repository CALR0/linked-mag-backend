   import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { NavBarLoginComponent } from "../../shared/components/nav-bar-login/nav-bar-login.component";
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-login-company',
  imports: [NavBarLoginComponent, FormsModule, ButtonModule, 
            InputTextModule, PasswordModule, InputGroupModule, FloatLabelModule, 
            InputNumberModule
          ],
  templateUrl: './login-company.component.html',
  styleUrl: './login-company.component.css'
})
export class LoginCompanyComponent {

  text1: string = '';
  password: string = '';
  nit: number | undefined;
  nameCompany: string = '';
  email: string = '';

}
