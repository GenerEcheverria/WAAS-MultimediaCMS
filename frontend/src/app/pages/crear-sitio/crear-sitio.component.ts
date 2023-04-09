import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { BodyElementComponent } from './body-element/body-element.component';
import { SimpleFooterComponent } from './footers/simple-footer/simple-footer.component';
import { RegularFooterComponent } from './footers/regular-footer/regular-footer.component';

@Component({
  selector: 'app-crear-sitio',
  templateUrl: './crear-sitio.component.html',
  styleUrls: ['./crear-sitio.component.css']
})
export class CrearSitioComponent implements OnInit {
  public sitioForm!: FormGroup;
  public isHero: boolean;
  public footerType: string;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    this.isHero = false;
    this.footerType = "simple";
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
      body: new FormArray([

      ]),
      footer: new FormGroup({
        simple: SimpleFooterComponent.addFooter(),
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

  setFooter(type: string): void {
    switch (type) {
      case 'simple': 
        this.getCtrl('footer', this.sitioForm).removeControl("regular");
        this.getCtrl('footer', this.sitioForm).addControl("simple", SimpleFooterComponent.addFooter())

        break;
      case 'regular': 
      this.getCtrl('footer', this.sitioForm).removeControl("simple"); 
      this.getCtrl('footer', this.sitioForm).addControl("regular",RegularFooterComponent.addFooter())
      break;
    }
    this.footerType = type;
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
