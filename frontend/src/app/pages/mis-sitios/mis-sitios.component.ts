import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { writeFile } from 'xlsx';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ElementRef } from '@angular/core';
import { MisSitiosService } from 'src/app/services/mis-sitios.service';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-mis-sitios',
  templateUrl: './mis-sitios.component.html',
  styleUrls: ['./mis-sitios.component.css']
})
export class MisSitiosComponent {
  public bibliotecaSitios: any[] = [];
  public filteredData: any[] = [];
  public Filtro: string = '';

  constructor(private misSitiosService: MisSitiosService) {}

  ngOnInit(): void {
    this.misSitiosService.getAll().subscribe(data => {
      this.bibliotecaSitios = data.sites;
      this.filteredData = this.bibliotecaSitios;
    });
  }
  
  filterData() {
    this.filteredData = this.bibliotecaSitios.filter((item) =>
      item.name.toLowerCase().includes(this.Filtro.toLowerCase())
    );
  }

  generarPDF() {
    const documentDefinition = {   content: [
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*'],
          body: [
            ['URL', 'Nombre', 'Vistas'],
            ...this.bibliotecaSitios.map(item => [item.url, item.name, item.views])
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
