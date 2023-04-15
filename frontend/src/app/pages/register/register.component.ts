import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


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
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      Nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(10)]],
      telefono: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
      fotoPerfil: ['', [Validators.required, this.imageValidator.bind(this)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]

    }); 
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

  send(): any {
    //Implememntar luego para redirigir a otra página se essperaría que fuese Sitios una vez iniciada sesión
    console.log(this.formLogin.value);
    window.location.href = "/misSitios";
  }

  
}
