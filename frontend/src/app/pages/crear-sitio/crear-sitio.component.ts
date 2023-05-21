import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BodyElementComponent } from './body-element/body-element.component';
import { CrearSitio } from 'src/app/interfaces/crear-sitio';
import { CrearSitioService } from 'src/app/services/crear-sitio.service';

@Component({
  selector: 'app-crear-sitio',
  templateUrl: './crear-sitio.component.html',
  styleUrls: ['./crear-sitio.component.css']
})
//Componente para la ventana de creación de sitios 
export class CrearSitioComponent implements OnInit {
  public sitioForm!: FormGroup;
  public isHero: boolean;
  protected setSocialMedia: boolean;
  protected setContact: boolean;
  protected setExtra: boolean;
  protected upload: boolean;
  protected uploadHeroImage: boolean;
  protected preview: boolean;
  protected showPreview: string;
  protected showForm: string;

  constructor(private router: Router, private cdr: ChangeDetectorRef, private crearSitio: CrearSitioService) {
    this.isHero = false;
    this.setSocialMedia = false;
    this.setContact = false;
    this.setExtra = false;
    this.upload = true;
    this.uploadHeroImage = true;
    this.preview = false;
    this.showPreview = "none";
    this.showForm = "block";
  }

  ngOnInit(): void {
    this.initSitioForm();
  }

  //Crea el formgroup general correspondiente al contenido del sitio web del usuario
  initSitioForm(): void {
    this.sitioForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/), Validators.maxLength(64)]),
      backgroundColor: new FormControl('#ffffff'),
      header: new FormGroup({
        hero: new FormControl(''),
        title: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]+$/), Validators.maxLength(64)]),
        position: new FormControl('', Validators.required),
        size: new FormControl('', Validators.required),
        color: new FormControl('#000000'),
        image: new FormControl(''),
      }),
      body: new FormArray([]),
      footer: new FormGroup({
        backgroundColor: new FormControl('#ffffff'),
        textColor: new FormControl('#000000'),
        socialMedia: new FormGroup({
          setSocialMedia: new FormControl(false),
          facebook: new FormControl(''),
          instagram: new FormControl(''),
          twitter: new FormControl(''),
          linkedin: new FormControl(''),
          tiktok: new FormControl(''),
          otro: new FormControl('')
        }),
        extra: new FormGroup({
          setExtra: new FormControl(false),
          image: new FormControl(''),
          text: new FormControl(''),
        }),
        contact: new FormGroup({
          setContact: new FormControl(false),
          phone: new FormControl('', Validators.pattern(/^\d{10}$/)),
          address: new FormControl(''),
        }),
      })
    })
  }

  getCtrl(key: string, form: FormGroup): any {
    return form.get(key)
  }

  //Añade un form group qie representa una columna completa al body
  addFullColumn(type: string): void {
    this.getCtrl('body', this.sitioForm).push(BodyElementComponent.addFullColumn(type))
    this.cdr.detectChanges();
  }

  //Añade un form group que representa una columna dividida al body
  addSplitColumn(leftType: string, rightType: string): void {
    this.getCtrl('body', this.sitioForm).push(BodyElementComponent.addSplitColumn(leftType, rightType))
    this.cdr.detectChanges();
  }

  deleteBodyElement(index: number): void {
    this.getCtrl('body', this.sitioForm).removeAt(index);
  }

  deleteAllBodyElement(): void {
    const bodyCtrl = this.getCtrl('body', this.sitioForm);
    bodyCtrl.clear();
  }

  onSubmit() {
    const sitioForm = this.sitioForm.value;
    const newCrearSitio: CrearSitio = {
      'name': sitioForm.name,
      'backgroundColor': sitioForm.backgroundColor,
      'views': 0,
      'url': "djdjdkdjdj",
      'header': {
        'title': sitioForm.header.title,
        'color': sitioForm.header.color,
        'position': sitioForm.header.position,
        'size': sitioForm.header.size,
        'hero': sitioForm.header.hero,
        'image': "adskdkdkdk"
      },
      'footer': {
        'backgroundColor': sitioForm.footer.backgroundColor,
        'textColor': sitioForm.footer.textColor,
        'socialMedia': {
          'setSocialMedia': false,//sitioForm.footer.setSocialMedia,
          'facebook': sitioForm.footer.facebook,
          'instagram': sitioForm.footer.instagram,
          'twitter': sitioForm.footer.twitter,
          'linkedin': sitioForm.footer.linkedin,
          'tiktok': sitioForm.footer.tiktok,
          'otro': sitioForm.footer.otro,
        },
        'extra': {
          'setExtra':  false,//sitioForm.footer.setExtra,
          'image': sitioForm.footer.image,
          'text': sitioForm.footer.text,
        },
        'contact': {
          'setContact': false,// sitioForm.footer.setContact,
          'phone': sitioForm.footer.phone,
          'address': sitioForm.footer.address,
        }
      }
    };
    console.log(newCrearSitio);
    this.crearSitio.crearSite(newCrearSitio).subscribe(
      (response) => {
        this.router.navigate(['/sitios']);
      },
      (error) => {
        console.error(error);
      }
    );
  }



  cancelar(): void {
    this.router.navigate(['/sitios']);
  }

  //Mostrar form y preview dependiendo del switch
  mostrarPreview() {
    this.preview = !this.preview
    if (this.preview) {
      this.showForm = "none";
    } else {
      this.showForm = "block";
    }
  }

  //getters para obtener valores del form usados en mensajes de validacion
  get name() {
    return this.sitioForm.get('name');
  }

  get headerTitle() {
    return this.sitioForm.get('header')?.get('title');
  }

  get headerPosition() {
    return this.sitioForm.get('header')?.get('position');
  }

  get headerSize() {
    return this.sitioForm.get('header')?.get('size');
  }

  get footerPhone() {
    return this.sitioForm.get('footer')?.get('contact')?.get('phone');
  }

}
