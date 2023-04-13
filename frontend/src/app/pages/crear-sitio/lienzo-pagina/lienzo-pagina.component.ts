import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lienzo-pagina',
  templateUrl: './lienzo-pagina.component.html',
  styleUrls: ['./lienzo-pagina.component.css']
})

export class LienzoPaginaComponent implements OnInit {
  @Input() webContent: any;
  protected full:any;
  protected fullType!:string;
  protected left:any;
  protected leftType!:string;
  protected right:any;
  protected rightType!:string;
  protected columns:any

  ngOnInit(): void {
    const body = this.webContent.body;
  }
}
