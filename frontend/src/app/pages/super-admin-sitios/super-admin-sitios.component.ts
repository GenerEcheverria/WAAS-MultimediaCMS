import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SasitiosService } from 'src/app/services/sasitios.service';
import { saUsuarios } from 'src/app/interfaces/saUsuarios';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs5';

@Component({
  selector: 'app-super-admin-sitios',
  templateUrl: './super-admin-sitios.component.html',
  styleUrls: ['./super-admin-sitios.component.css']
})
export class SuperAdminSitiosComponent implements OnInit {
  public saUsuarios: saUsuarios[] = [];
  public nombre: string[] = [];
  public nsitios: number[] = [];

  constructor(private sasitiosService: SasitiosService) { }

  ngOnInit() {
    this.sasitiosService.getUsuarios().subscribe((data: saUsuarios[]) => {
      this.saUsuarios = data;
    });
  }

  ngAfterViewInit() {
      $(document).ready(function () {
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
