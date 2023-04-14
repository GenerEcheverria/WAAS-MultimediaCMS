import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-texto-lienzo',
  templateUrl: './texto-lienzo.component.html',
  styleUrls: ['./texto-lienzo.component.css']
})
export class TextoLienzoComponent implements OnInit {
  @Input() title!: string;
  @Input() position!: string;
  @Input() texto: string = "";
  @Input() alineacionTexto: string = "";
  protected clase: string = "";
  protected classPosition!: string;
  ngOnInit(): void {
    switch (this.position) {
      case "left":
        this.classPosition = "d-flex justify-content-start";
        break;
      case "center":
        this.classPosition = "d-flex justify-content-center";
        break;
      case "right":
        this.classPosition = "d-flex justify-content-end";
        break;
    }
    switch (this.alineacionTexto) {
      case "justified":
        this.clase = "justificado-texto";
        break;
      case "left":
        this.clase = "text-start";
        break;
      case "center":
        this.clase = "text-center";
        break;
      case "right":
        this.clase = "text-end";
        break;
    }
  }
}