import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { passwordValidator } from './password.validator';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {

  public form1!: FormGroup;
  public form2!: FormGroup;

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
    this.form1 = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(32), Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.pattern('^((\\+52-?)|0)?[0-9]{10}$')]],
      imagen: [null, Validators.required]
    })

    this.form2 = this.formBuilder.group({
      npass: ['', [Validators.required, Validators.maxLength(32), Validators.minLength(8)]],
      cpass: ['', [Validators.required, Validators.maxLength(32), Validators.minLength(8)]]
    }, { validator: passwordValidator })
  }

  send(): any {
    console.log(this.form1.value);
  }
}
