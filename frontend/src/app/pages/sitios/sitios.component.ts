import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sitios',
  templateUrl: './sitios.component.html',
  styleUrls: ['./sitios.component.css']
})
export class SitiosComponent {
  @Input() webContent: any;
  protected full:any;
  protected fullType!:string;
  protected left:any;
  protected leftType!:string;
  protected right:any;
  protected rightType!:string;
  protected columns:any;
  protected url!:string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.url = this.route.snapshot.paramMap.get('url');
    



    const body = this.webContent.body;
  }
}
