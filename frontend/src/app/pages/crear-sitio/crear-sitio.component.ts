import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
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
      name: new FormControl(''),
      header: new FormGroup({
        hero: new FormControl(''),
        title: new FormControl(''),
        position: new FormControl(''),
        size: new FormControl(''),
        color: new FormControl(''),
        image: new FormControl(''),
      }),
      body: new FormArray([]),
      footer: new FormGroup({
        backgroundColor: new FormControl(''),
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
          phone: new FormControl(''),
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

}
