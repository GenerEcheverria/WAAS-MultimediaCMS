import { formatNumber } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { Crypto } from 'src/app/util/crypto';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';

/**
 * Componente para el registro de usuarios.
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  /**
   * Formulario de registro.
   */
  public formLogin!: FormGroup;

   /**
   * Contraseña ingresada por el usuario.
   */
  public pass: string = ''

  /**
   * Confirmación de contraseña ingresada por el usuario.
   */
  public pass2: string = ''

  /**
   * Fuente de imagen para mostrar la vista previa.
   */
  public imageSrc: string = '';

  /**
   * Instancia de la clase Crypto para encriptar contraseñas.
   */
  private crypto = new Crypto;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

  /**
   * Se ejecuta al inicializar el componente.
   * Se configura el formulario de registro con las validaciones correspondientes.
   */
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

  /**
   * Método para manejar el cambio de archivo en el input de imagen.
   * Permite obtener la imagen seleccionada y mostrarla en la vista previa.
   * @param event Evento de cambio de archivo.
   */
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

  /**
   * Validador personalizado para la dimensión de la imagen.
   * Verifica que la imagen tenga dimensiones cuadradas.
   * @param control Control del formulario.
   * @returns Error de validación si la imagen no tiene dimensiones cuadradas.
   */
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

   /**
   * Método para enviar el formulario de registro.
   * Se obtienen los valores ingresados por el usuario y se realiza el registro llamando al servicio de autenticación.
   */
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