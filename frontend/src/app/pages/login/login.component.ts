import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Crypto } from 'src/app/util/crypto';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

/**
 * Componente para la página de inicio de sesión.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /**
   * Formulario de inicio de sesión.
   */
  public formLogin!: FormGroup;

   /**
   * Objeto para encriptar datos.
   */
  private crypto = new Crypto;

  /**
   * Constructor del componente.
   * @param formBuilder Objeto FormBuilder para construir formularios.
   * @param authService Servicio de autenticación.
   * @param router Objeto Router para la navegación.
   */
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

   /**
   * Método de inicialización del componente.
   */
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });  
  }

  /**
   * Método ejecutado al enviar el formulario de inicio de sesión.
   */
  onSubmit() {
    const formUser = this.formLogin.value;
    const user = {
      'email' : formUser.email,
      'password' : this.crypto.encrypted(formUser.password)
    } 
    this.authService.login(user.email, user.password).subscribe(
      (response) => {
        localStorage.setItem('token', response.access_token);
        this.router.navigate(['/']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
