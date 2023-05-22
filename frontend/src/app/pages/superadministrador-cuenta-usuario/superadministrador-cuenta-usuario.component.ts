import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs5';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from 'src/app/services/site.service';
import { UserService } from 'src/app/services/user.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-superadministrador-cuenta-usuario',
  templateUrl: './superadministrador-cuenta-usuario.component.html',
  styleUrls: ['./superadministrador-cuenta-usuario.component.css']
})
export class SuperadministradorCuentaUsuarioComponent implements OnInit {
  id!: string | null;
  protected name!: string;
  protected email!: string;
  protected phone!: string;
  protected sites: any;
  protected isDeleteUser!: boolean;

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

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private siteService: SiteService,
    private router: Router,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.isDeleteUser = false;
    this.loadData();

  }

  async loadData(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      try {
        const response = await this.userService.getUser(this.id.toString()).toPromise();
        this.email = response.email;
        this.name = response.name;
        this.phone = response.phone;
      } catch (error) {
        this.router.navigate(['/sasitios']);
      }
      try {
        const response = await this.siteService.getSitesForUser(this.id.toString()).toPromise();
        this.sites = response.sites;
      } catch (error) { }
    } else {
      this.router.navigate(['/sasitios']);
    }
  }

  deleteUser() {
    if (this.id) {
      this.userService.deleteUser(this.id).subscribe(
        (response) => {
          this.router.navigate(['/sasitios']);
        },
        (error) => {
          alert("No pudo borrarse el usuario")
        }
      )
    }
  }

  formatDate(date: string): string {
    const formattedDate = this.datePipe.transform(date, 'dd/MM/yyyy HH:mm:ss');
    return formattedDate || '';
  }

}
