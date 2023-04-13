import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-lienzo',
  templateUrl: './video-lienzo.component.html',
  styleUrls: ['./video-lienzo.component.css']
})
export class VideoLienzoComponent implements OnInit {
  @Input() fuenteVid: string = "";
  @Input() tamañoVid:  string = "";
  clase: string = "";
   
  constructor(private sanitizer: DomSanitizer) {}

  safeUrl: any;

  ngOnInit(): void {   
    
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.fuenteVid);
 
    switch (this.tamañoVid) {
      case "Pequeño":
        this.clase = "tamaño-pequeño";
      break;
      
      case "Mediano":
        this.clase = "tamaño-mediano";
      break;
    
      case "Grande":
        this.clase = "tamaño-grande";
      break;
    }
  }
}
