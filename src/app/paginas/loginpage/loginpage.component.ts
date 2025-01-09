import { Component, inject } from '@angular/core';
import { PoPageLoginComponent, PoPageLoginModule } from '@po-ui/ng-templates';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [PoPageLoginModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css',
})
export class LoginpageComponent {
  private loginService = inject(LoginService);
  public confirmLogin(loginPage: PoPageLoginComponent) {
    this.loginService.sendLogin(loginPage.login, loginPage.password).subscribe({
      next: (value) => {
        console.log('sucesso', value);
      },
      error: (err) => {
        console.log('erro', err);
      },
      complete: () => {},
    });
  }
}
