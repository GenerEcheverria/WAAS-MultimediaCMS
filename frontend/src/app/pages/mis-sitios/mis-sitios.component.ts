import { Component } from '@angular/core';

@Component({
  selector: 'app-mis-sitios',
  templateUrl: './mis-sitios.component.html',
  styleUrls: ['./mis-sitios.component.css']
})
export class MisSitiosComponent {
  public bibliotecaSitios: {link: string, titulo: string, seccion: string, vistas: number}[] = [];
  public filteredData = this.bibliotecaSitios
  public Filtro: string = '';

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

  filterData() {
    this.filteredData = this.bibliotecaSitios.filter((item) =>
      item.titulo.toLowerCase().includes(this.Filtro.toLowerCase())
    );
  }

}
