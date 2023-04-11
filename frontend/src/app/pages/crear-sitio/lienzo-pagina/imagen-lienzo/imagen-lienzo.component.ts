import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-imagen-lienzo',
  templateUrl: './imagen-lienzo.component.html',
  styleUrls: ['./imagen-lienzo.component.css']
})
export class ImagenLienzoComponent implements OnInit {
  @Input() fuenteImg: string = "";
  @Input() tamañoImg:  string = "";
  @Input() captionImg: string = "";
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
