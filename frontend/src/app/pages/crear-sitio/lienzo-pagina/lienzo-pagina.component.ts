import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lienzo-pagina',
  templateUrl: './lienzo-pagina.component.html',
  styleUrls: ['./lienzo-pagina.component.css']
})
export class LienzoPaginaComponent implements OnInit {
  @Input() webContent!: any;

  ngOnInit(): void {
  }
}
