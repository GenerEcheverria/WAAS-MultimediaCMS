import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-lienzo',
  templateUrl: './footer-lienzo.component.html',
  styleUrls: ['./footer-lienzo.component.css']
})
export class FooterLienzoComponent {
  @Input() backgroundColor: string = "";
  @Input() textColor: string = ""
  @Input() setSocialMedia!: boolean;
  @Input() facebookUrl: string = "";
  @Input() instagramUrl: string = "";
  @Input() twitterUrl: string = "";
  @Input() linkedinUrl: string = "";
  @Input() tiktokUrl: string = "";
  @Input() otroUrl: string = "";
  @Input() setExtra!:boolean;
  @Input() imgExtraFooter:string = "";
  @Input() textExtraFooter:string = "";  
  @Input() setContact!:boolean;
  @Input() phone:string = "";
  @Input() address:string = ""; 

}