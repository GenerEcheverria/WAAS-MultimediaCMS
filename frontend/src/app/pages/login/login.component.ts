import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });  
  }

  send(): any {
    //Implememntar luego para redirigir a otra página se essperaría que fuese Sitios una vez iniciada sesión
    console.log(this.formLogin.value);
  }
}
