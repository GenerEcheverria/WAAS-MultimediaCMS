import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-lienzo',
  templateUrl: './footer-lienzo.component.html',
  styleUrls: ['./footer-lienzo.component.css']
})
export class FooterLienzoComponent {
  @Input() backgroundColor: string = "";
  @Input() setSocialMedia: string = "";
  @Input() facebookUrl: string = "";
  @Input() instagramUrl: string = "";
  @Input() twitterUrl: string = "";
  @Input() linkedinUrl: string = "";
  @Input() tiktokUrl: string = "";
  @Input() otroUrl: string = "";
  @Input() setExtra:string = "";
  @Input() imgExtraFooter:string = "";
  @Input() textExtraFooter:string = "";  
  @Input() setContact:string = "";
  @Input() phone:string = "";
  @Input() address:string = ""; 
}