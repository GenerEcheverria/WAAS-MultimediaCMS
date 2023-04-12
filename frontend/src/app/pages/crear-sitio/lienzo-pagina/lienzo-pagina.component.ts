import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lienzo-pagina',
  templateUrl: './lienzo-pagina.component.html',
  styleUrls: ['./lienzo-pagina.component.css']
})
export class LienzoPaginaComponent {
  titulo: string ="La rana rene"
  posicion: string = "Derecha"
  texto: string = ""
  alineacion: string = "Centro"
  

  

  asignarTexto(){
    switch (this.alineacion) {
      case "Justificado":
  
      break;

      case "Izquierda":
  
      break;
    
      case "Centro":
  
      break;

      case "Derecha":
  
      break;
    }
  }
}
