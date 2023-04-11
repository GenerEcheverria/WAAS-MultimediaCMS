import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-texto-lienzo',
  templateUrl: './texto-lienzo.component.html',
  styleUrls: ['./texto-lienzo.component.css']
})
export class TextoLienzoComponent implements OnInit {
  @Input() texto: string = ""; 
  @Input() alineacionTexto:  string = ""; 
  clase: string = "";

  ngOnInit(): void {    
    switch (this.alineacionTexto) {
      case "Justificado":
        this.clase = "justificado-texto";
      break;
      
      case "Izquierda":
        this.clase = "text-start";
      break;
    
      case "Centro":
        this.clase = "text-center";
      break;

      case "Derecha":
        this.clase = "text-end";
      break;
    }
  }
}