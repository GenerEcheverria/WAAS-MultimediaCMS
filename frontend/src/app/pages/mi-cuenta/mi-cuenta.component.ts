import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { passwordValidator } from './password.validator';

/**
 * Componente encargado de administrar la cuenta del usuario.
 */
@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {

   /**
   * Formulario para los datos personales del usuario.
   */
  public form1!: FormGroup;

  /**
   * Formulario para el cambio de contraseña del usuario.
   */
  public form2!: FormGroup;

  /**
   * Constructor del componente MiCuentaComponent.
   * @param formBuilder Instancia del FormBuilder utilizado para crear los formularios.
   */
  constructor(private formBuilder: FormBuilder){

  }

  /**
   * Método de ciclo de vida de Angular que se ejecuta al iniciar el componente.
   * Se encarga de inicializar los formularios y definir las validaciones.
   */
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

  /**
   * Método invocado al enviar el formulario.
   * Imprime en la consola los valores del formulario de datos personales.
   */
  send(): any {
    console.log(this.form1.value);
  }
}
