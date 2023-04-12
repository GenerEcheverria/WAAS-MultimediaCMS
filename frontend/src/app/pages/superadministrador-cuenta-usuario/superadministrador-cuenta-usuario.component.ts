import { Component } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs5';

@Component({
  selector: 'app-superadministrador-cuenta-usuario',
  templateUrl: './superadministrador-cuenta-usuario.component.html',
  styleUrls: ['./superadministrador-cuenta-usuario.component.css']
})
export class SuperadministradorCuentaUsuarioComponent {
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
