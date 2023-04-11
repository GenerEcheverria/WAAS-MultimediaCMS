import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-imagen-lienzo',
  templateUrl: './imagen-lienzo.component.html',
  styleUrls: ['./imagen-lienzo.component.css']
})
export class ImagenLienzoComponent implements OnInit {
  fuente: string = "https://scontent.fmid3-1.fna.fbcdn.net/v/t1.6435-9/81774545_2788234737935350_9042756730638827520_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cuCu0WNjzl8AX_TmoSt&_nc_ht=scontent.fmid3-1.fna&oh=00_AfDLa96GjxX3MNeKLk0mxLkAu3_S1dwx3gC3QKymiA2HnA&oe=645C3616"; //Se obtiene de BD
  tamañoImg:  string = "Derecha"; //Pequeño || Mediano|| Grande 
  clase: string = "";

  ngOnInit(): void {    
    switch (this.tamañoImg) {
      case "Pequeño":
        this.clase = "tamaño-pequeño";
      break;
      
      case "Mediano":
        this.clase = "tamaño-mediano";
      break;
    
      case "Grande":
        this.clase = "tamaño-grande";
      break;
    }
  }
}
