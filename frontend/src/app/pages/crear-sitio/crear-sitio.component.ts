import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BodyElementComponent } from './body-element/body-element.component';

@Component({
  selector: 'app-crear-sitio',
  templateUrl: './crear-sitio.component.html',
  styleUrls: ['./crear-sitio.component.css']
})
export class CrearSitioComponent implements OnInit {
  public sitioForm!: FormGroup;
  public isHero: boolean;
  protected setSocialMedia: boolean;
  protected setContact: boolean;
  protected setExtra: boolean;
  protected upload: boolean;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    this.isHero = false;
    this.setSocialMedia = false;
    this.setContact = false;
    this.setExtra = false;
    this.upload = true;
  }

  ngOnInit(): void {
    this.initSitioForm();
  }

  initSitioForm(): void {
    this.sitioForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/),Validators.maxLength(64)]),
      backgroundColor: new FormControl('#ffffff'),
      header: new FormGroup({
        hero: new FormControl(''),
        title: new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]+$/), Validators.maxLength(32)]),
        position: new FormControl('', Validators.required),
        size: new FormControl('', Validators.required),
        color: new FormControl('#000000'),
        image: new FormControl(''),
      }),
      body: new FormArray([]),
      footer: new FormGroup({
        backgroundColor: new FormControl('#ffffff'),
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

  addFullColumn(type: string): void {
    this.getCtrl('body', this.sitioForm).push(BodyElementComponent.addFullColumn(type))
    this.cdr.detectChanges();
  }

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

  cancelar(): void {
    this.router.navigate(['/sitios']);
  }

  onSubmit(): void {
    console.log(this.sitioForm.value)
  }

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

  get footerPhone(){
    return this.sitioForm.get('footer')?.get('contact')?.get('phone');
  }

}
