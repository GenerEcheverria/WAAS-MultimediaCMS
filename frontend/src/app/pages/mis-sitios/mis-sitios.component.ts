import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { writeFile } from 'xlsx';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ElementRef } from '@angular/core';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
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

  generarPDF() {
    const documentDefinition = {   content: [
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*'],
          body: [
            ['Link', 'Título', 'Sección', 'Vistas'],
            ...this.bibliotecaSitios.map(item => [item.link, item.titulo, item.seccion, item.vistas])
          ]
        }
      }
    ],
    defaultStyle: {
      fontSize: 12,
      color: '#333333'
    },
    styles: {
      body: {
        fillColor: '#CCCCCC',
        color: '#FFFFFF',
        bold: true,
        fontSize: 15
      }
    }
  };
    pdfMake.createPdf(documentDefinition).download('ReporteMisSitios.pdf');
  }

  generarExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.bibliotecaSitios);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Biblioteca Sitios');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(data, 'ReporteMisSitios.xlsx');
  }

  async generarQRyDescargar(url: string): Promise<void> {
    try {
      const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url)}`;
      const response = await fetch(apiUrl);
      const blob = await response.blob();
  
      saveAs(blob, 'qrcode.png');
    } catch (error) {
      console.error('Error generating and downloading QR code:', error);
    }
  }

}
