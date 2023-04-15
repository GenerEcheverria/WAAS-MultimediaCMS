import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-builder',
  templateUrl: './body-builder.component.html',
  styleUrls: ['./body-builder.component.css']
})

//Componente encargado de devolver el tipo de medio correspondiente
export class BodyBuilderComponent implements OnInit {
  @Input() webContent: any;
  protected full: any;
  protected fullType!: string;
  protected left: any;
  protected leftType!: string;
  protected right: any;
  protected rightType!: string;
  protected columns: any

  ngOnInit(): void {
    const item = this.webContent;
    if (Object.keys(item).length == 1) {
      //Si solo se encuentra un elemento, se considera que es una columna completa
      //es decir, ocupará todo el width
      this.columns = false;
      this.full = item.full;
      this.fullType = Object.keys(this.full)[0];
    } else {
      //De lo contrario será una columna dividida, es decir,
      //tendra un medio en el lado izquierdo y otro en el derecho
      this.columns = true;
      console.log(item.left, item.right)
      this.left = item.left
      this.leftType = Object.keys(this.left)[0];
      this.right = item.right
      this.rightType = Object.keys(this.right)[0];
    }

  }
}