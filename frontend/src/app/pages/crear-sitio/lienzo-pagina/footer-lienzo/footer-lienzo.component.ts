import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-lienzo',
  templateUrl: './footer-lienzo.component.html',
  styleUrls: ['./footer-lienzo.component.css']
})
export class FooterLienzoComponent {
  @Input() backgroundColor: string = "";
  @Input() setSocialMedia: string = "";
  @Input() facebookIcon: string = "";
  @Input() instagramIcon: string = "";
  @Input() twitterIcon: string = "";
  @Input() linkedinIcon: string = "";
  @Input() tiktokIcon: string = "";
  @Input() otroIcon: string = "";
  @Input() setExtra:string = "";
  @Input() imgExtraFooter:string = "";
  @Input() textExtraFooter:string = "";  
  @Input() setContact:string = "";
  @Input() phone:string = "";
  @Input() address:string = ""; 
}