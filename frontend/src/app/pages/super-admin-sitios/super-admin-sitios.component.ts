import { Component } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs5';

/**
 * Componente para la administración de sitios por parte de un superadministrador.
 */
@Component({
  selector: 'app-super-admin-sitios',
  templateUrl: './super-admin-sitios.component.html',
  styleUrls: ['./super-admin-sitios.component.css']
})
export class SuperAdminSitiosComponent {

  /**
   * Método que se ejecuta después de que la vista ha sido inicializada.
   * Inicializa el plugin DataTables para la tabla de sitios.
   */
  ngAfterViewInit() {
    $(document).ready(function() {
      $('#example').DataTable({
        
        "language": {
          "search": "",
          "searchPlaceholder": "Buscar",
      },
          "dom": '<"d-flex justify-content-end"f>t<"d-flex justify-content-between"ipl>',
          
          "pagingType": "simple_numbers",
      });
  });
}
}
