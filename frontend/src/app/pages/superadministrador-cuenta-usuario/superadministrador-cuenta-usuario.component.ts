import { Component } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs5';

/**
 * Componente para la administración de cuentas de usuario por parte de un superadministrador.
 */
@Component({
  selector: 'app-superadministrador-cuenta-usuario',
  templateUrl: './superadministrador-cuenta-usuario.component.html',
  styleUrls: ['./superadministrador-cuenta-usuario.component.css']
})
export class SuperadministradorCuentaUsuarioComponent {

  /**
   * Método que se ejecuta después de que la vista ha sido inicializada.
   * Inicializa el plugin DataTables para la tabla de cuentas de usuario.
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
