import { formatNumber } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { Crypto } from 'src/app/util/crypto';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public formLogin!: FormGroup;
  public pass: string = ''
  public pass2: string = ''
  public imageSrc: string = '';
  private crypto = new Crypto;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      Nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, this.emailValidator()]],
      telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      fotoPerfil: ['', [Validators.required, this.imageValidator.bind(this)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]}, { validator: this.passwordsMatchValidator }); 
  }

  passwordsMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if(password != "" && confirmPassword !=""){
      if (password && confirmPassword && password !== confirmPassword) {
        formGroup.get('confirmPassword')?.setErrors({ passwordsNotMatch: true });
      } else {
        formGroup.get('confirmPassword')?.setErrors(null);
      }
    }
  }
  
  
  emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const isValid = emailPattern.test(control.value);
      return isValid ? null : { emailInvalid: true };
    };
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file && file.type.match(/image\/(gif|jpe?g|png)$/i)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
      console.log('hola owo')
      reader.readAsDataURL(file);
    } else {
      this.imageSrc = '';
    }
  }

  imageValidator(control: AbstractControl): ValidationErrors | null {
    const file = control.value;
    if (!file) {
      return null;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result as string;
      img.onload = () => {
        if (img.width !== img.height) {
          control.setErrors({ dimensions: true });
        } else {
          control.setErrors(null);
        }
      };
    };

    return null;
  }

  onSubmit() {
    const formUser = this.formLogin.value;
    console.log(formUser);
    const newUser:User = {
      'name': formUser.Nombre,
      'email' : formUser.email,
      'password' : this.crypto.encrypted(formUser.password),
      'role' : "administrador",
      'phone': formUser.telefono,
      'photo': "adadad", //aqui le deben pasar la url
    }
    this.authService.register(newUser.name, newUser.email, newUser.password, newUser.role, newUser.phone, newUser.photo).subscribe(
      (response) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}