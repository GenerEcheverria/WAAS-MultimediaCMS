import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lienzo-pagina',
  templateUrl: './lienzo-pagina.component.html',
  styleUrls: ['./lienzo-pagina.component.css']
})

export class LienzoPaginaComponent implements OnInit {
  @Input() webContent!: any;

  ngOnInit(): void {
    const body = this.webContent.body;
    for(const item of body) {
      console.log(item);
    }
  }
}
