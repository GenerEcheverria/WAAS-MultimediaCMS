import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-lienzo',
  templateUrl: './titulo-lienzo.component.html',
  styleUrls: ['./titulo-lienzo.component.css']
})
export class TituloLienzoComponent implements OnInit{
  @Input() title: string = ""; 
  @Input() position:  string = ""; 
  @Input() hero!: boolean;
  @Input() size!: string;
  @Input() color!: string;
  @Input() image!: string;
  protected clase: string = "";
  protected claseSize: string = "";
  
  ngOnInit(): void {    
    switch (this.position) {
      case "left":
        this.clase = "d-flex justify-content-start";
      break;
      case "center":
        this.clase = "d-flex justify-content-center";
      break;
      case "right":
        this.clase = "d-flex justify-content-end";
      break;
    }
    switch (this.size) {
      case "small":
        this.claseSize = "fs-4";
      break;
      case "medium":
        this.claseSize = "fs-3";
      break;
      case "big":
        this.claseSize = "fs-1";
      break;
    }
  }
}
