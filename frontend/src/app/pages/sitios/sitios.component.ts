import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-sitios',
  templateUrl: './sitios.component.html',
  styleUrls: ['./sitios.component.css']
})
export class SitiosComponent {
  @Input() webContent: any;
  protected full: any;
  protected fullType!: string;
  protected left: any;
  protected leftType!: string;
  protected right: any;
  protected rightType!: string;
  protected columns: any;
  private url!: string | null;

  constructor(private route: ActivatedRoute, private siteService: SiteService, private router: Router) { }

  ngOnInit(): void {
    this.url = this.route.snapshot.paramMap.get('url');
    console.log(this.url);
    let id:string = "";
    if (this.url) {
      this.siteService.getSiteIdbyUrl(this.url.toString()).subscribe(
        (response) => {
          console.log(response.id)
          id = response.id;
          this.siteService.getSite(id).subscribe(
            (response) => {
              console.log(response);
            },
            (error) => {
              console.error(JSON.stringify(JSON.parse(error), null, 2));
            }
          )
        },
        (error) => {
          console.error(JSON.stringify(JSON.parse(error), null, 2));
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
    
    

    //const body = this.webContent.body;
  }
}
