import { Component } from '@angular/core';

/**
 * Componente para mostrar el ranking de sitios.
 */
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {
    /**
   * Lista de sitios en la biblioteca.
   */
  public bibliotecaSitios: {link: string, titulo: string, seccion: string, vistas: number}[] = [];

   /**
   * Se ejecuta al inicializar el componente.
   */
  ngOnInit(): void {
    let a = {
      link: '/misSitios',
      titulo: 'Sitio A',
      seccion: 'seccion 1',
      vistas: 3
    };
    this.bibliotecaSitios.push(a);

    let b = {
      link: '/ranking',
      titulo: 'Sitio B',
      seccion: 'seccion 3',
      vistas: 5
    };
    this.bibliotecaSitios.push(b);

    let c = {
      link: '/cuenta',
      titulo: 'Sitio C',
      seccion: 'seccion 2',
      vistas: 3
    };
    this.bibliotecaSitios.push(c);

    let d = {
      link: '/misSitios',
      titulo: 'Sitio D',
      seccion: 'seccion 4',
      vistas: 5
    };
    this.bibliotecaSitios.push(d);

    let e = {
      link: '/misSitios',
      titulo: 'Sitio E',
      seccion: 'seccion 4',
      vistas: 5
    };
    this.bibliotecaSitios.push(e);

    console.log('estos son los sitios actuales', this.bibliotecaSitios);
  }
}
