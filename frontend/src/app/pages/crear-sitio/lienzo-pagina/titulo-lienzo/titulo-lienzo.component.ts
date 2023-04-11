import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-lienzo',
  templateUrl: './titulo-lienzo.component.html',
  styleUrls: ['./titulo-lienzo.component.css']
})
export class TituloLienzoComponent implements OnInit{
  @Input() titulo: string = ""; 
  @Input() posicionTitulo:  string = ""; 
  clase: string = "";

  ngOnInit(): void {    
    switch (this.posicionTitulo) {
      case "Izquierda":
        this.clase = "d-flex justify-content-start";
      break;
    
      case "Centro":
        this.clase = "d-flex justify-content-center";
      break;

      case "Derecha":
        this.clase = "d-flex justify-content-end";
      break;
    }
  }
}
