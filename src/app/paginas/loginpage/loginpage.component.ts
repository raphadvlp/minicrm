import { Component, inject } from '@angular/core';
import { PoPageLoginComponent, PoPageLoginModule } from '@po-ui/ng-templates';
import { LoginService } from '../../services/login.service';
import { loginData } from '../../classes/login';
import { Router } from '@angular/router';
import { PoLoadingModule, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [PoPageLoginModule, PoLoadingModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css',
})
export class LoginpageComponent {
  private loginService = inject(LoginService);
  private loginData!: loginData;
  private router = inject(Router);

  private notify = inject(PoNotificationService);

  public isHiddenLoading: boolean = true;

  public confirmLogin(loginPage: PoPageLoginComponent) {
    this.isHiddenLoading = false;
    this.loginService.sendLogin(loginPage.login, loginPage.password).subscribe({
      next: (value) => {
        let loginNow = Date.now();
        this.loginData = value;

        localStorage.setItem('access_token', this.loginData.access_token);
        localStorage.setItem('refresh_token', this.loginData.refresh_token);
        localStorage.setItem(
          'expires_in',
          (loginNow + this.loginData.expires_in * 1000).toString() //Valor em milisegundos para o localStorage
        );
        localStorage.setItem('username', loginPage.login);

        this.isHiddenLoading = true;
        this.router.navigate(['home']);
      },
      error: (err) => {
        console.log('erro', err);
        let msgerro: string;
        err.error.code === 401
          ? (msgerro = 'Login Inválido!')
          : (msgerro = err.error.message);
        this.notify.error({ duration: 2000, message: msgerro }); //TODO: Corrigir a mensagem
        this.isHiddenLoading = true;
      },
      complete: () => {},
    });
  }
}
