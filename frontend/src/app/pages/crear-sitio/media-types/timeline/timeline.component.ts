import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent {

  constructor(private sanitizer: DomSanitizer) {}
  typeView: string = 'vertical'
  editMode: boolean = true;
  size: number = 36;
  indexModal: number = 0;
  color: string = '#000000';
  text: string = 'Mi titulo';
  imageSrc: string = ''
  videoSrc: SafeUrl | undefined;
  LineaDelTiempo = [
    { Fondo: '#FFFFFF', Ancho: 16, Titulo: '', TituloColor: '',Multimedia: '', imageSrc: '', FotoAncho:100, Descripcion: '',DescripcionColor:'',videoSrc: this.sanitizer.bypassSecurityTrustUrl(''), Fecha: '2000' },
  ];

  agregarItem() {
    this.LineaDelTiempo.push({Fondo: '#FFFFFF', Ancho: 16, Titulo: '', TituloColor: '', Multimedia: '', imageSrc: '', FotoAncho:100, Descripcion: '',DescripcionColor:'',videoSrc: this.sanitizer.bypassSecurityTrustUrl(''), Fecha: '2000' });
  }

  deleteItem(index: number) {
    console.log('apuntando a',index)
    if(this.LineaDelTiempo.length>1){
    this.LineaDelTiempo.splice(index,1)
  }
  }

  modificar() {
    if(this.editMode){
      this.editMode=false
    }else{
      this.editMode=true
    }
    console.log(this.LineaDelTiempo)
    console.log(this.LineaDelTiempo.slice(0,2))
  }

  handleFileInput(event: any,  index: number): void {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      if (file.type.startsWith('image/')) {
        reader.onload = () => {
        this.LineaDelTiempo[index].imageSrc = reader.result as string;
        this.LineaDelTiempo[index].Multimedia = 'Foto';
        };

      } else if (file.type.startsWith('video/')) {
        const videoBlobUrl = URL.createObjectURL(file);
        this.LineaDelTiempo[index].videoSrc = this.sanitizer.bypassSecurityTrustUrl(videoBlobUrl);
        this.LineaDelTiempo[index].Multimedia = 'Video';
      }
    }
  }

  // dataURItoBlob(dataURI: string): Blob {
  //   const byteString = atob(dataURI.split(',')[1]);
  //   const arrayBuffer = new ArrayBuffer(byteString.length);
  //   const uint8Array = new Uint8Array(arrayBuffer);
  
  //   for (let i = 0; i < byteString.length; i++) {
  //     uint8Array[i] = byteString.charCodeAt(i);
  //   }
  
  //   return new Blob([arrayBuffer], { type: 'image/jpeg' });
  // }

  // saveImage() {
  //   const blob = this.dataURItoBlob(this.imageSrc);
  //   saveAs(blob, 'image.jpg');
  // }


}
