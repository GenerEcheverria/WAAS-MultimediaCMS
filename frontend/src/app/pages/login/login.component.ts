import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Crypto } from 'src/app/util/crypto';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formLogin!: FormGroup;
  private crypto = new Crypto;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });  
  }
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
