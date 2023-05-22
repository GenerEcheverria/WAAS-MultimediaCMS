import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { passwordValidator } from './password.validator';
import { AuthService } from 'src/app/services/auth.service';
import { MiCuentaService } from 'src/app/services/mi-cuenta.service';
import { Router } from '@angular/router';
import { Cuenta } from 'src/app/interfaces/cuenta';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {
  public form1!: FormGroup;
  public form2!: FormGroup;
  public datosCuenta: any[] = [];
  public userData: any;
  public idUser: string = "";
  public nameUser: string = "";
  public emailUser: string = "";
  public phoneUser: string = "";
  
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private cuenta: MiCuentaService){}

  ngOnInit(): void {
    this.form1 = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(32), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.pattern('^((\\+52-?)|0)?[0-9]{10}$')]],
      imagen: [null, Validators.required]
    })
    this.form2 = this.formBuilder.group({
      npass: ['', [Validators.required, Validators.maxLength(32), Validators.minLength(8)]],
      cpass: ['', [Validators.required, Validators.maxLength(32), Validators.minLength(8)]]
    }, { validator: passwordValidator })

    this.authService.me().subscribe(data => {
      this.userData = data;
      this.idUser = data.id;
    
      this.form1.patchValue({
        nombre: data.name,
        tel: data.phone,
        email: data.email,        
      });
    });
    
  }

  onSubmitDatos() {
    const sitioForm = this.form1.value;
    sitioForm.url = sitioForm.name;
    sitioForm.views = 0;
    console.log("Sitio forme es: "+sitioForm);
    this.cuenta.miCuenta(sitioForm, this.idUser).subscribe(
      (response) => {
        this.router.navigate(['/misSitios']);
      },
      (error) => {
        console.error(JSON.stringify(JSON.parse(error), null, 2));
      }
    );
  }

  onSubmitContrasenas(){

  }
}
