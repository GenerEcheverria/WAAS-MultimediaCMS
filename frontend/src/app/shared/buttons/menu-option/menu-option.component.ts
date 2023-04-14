import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.css']
})
//Boton generico para las opciones del sidebar
export class MenuOptionComponent {
  @Input() titulo: string =""
  @Input() link: string = ""
  @Input() icon: string = ""
}
