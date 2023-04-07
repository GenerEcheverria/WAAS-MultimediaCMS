import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BodyElementComponent } from './body-element/body-element.component';
import { SplitColumnComponent } from './columnas/split-column/split-column.component';
import { FullColumnComponent } from './columnas/full-column/full-column.component';

@Component({
  selector: 'app-edicion-sitio',
  templateUrl: './edicion-sitio.component.html',
  styleUrls: ['./edicion-sitio.component.css']
})
export class EdicionSitioComponent implements OnInit {
  public sitioForm!: FormGroup;
  public isHero: boolean;

  constructor(private router: Router) {
    this.isHero = false;
  }

  ngOnInit(): void {
      this.initSitioForm();
  }

  initSitioForm(): void {
    this.sitioForm = new FormGroup({
      name: new FormControl(''),
      header: new FormGroup( {
        hero: new FormControl(''),
        title: new FormControl(''),
        position: new FormControl(''),
        size: new FormControl(''),
        color: new FormControl(''),
        image: new FormControl(''),
      }),
      body: new FormArray([
        
      ]),
    })
  }

  getCtrl(key: string, form: FormGroup): any {
    return form.get(key)
  }

  // addBodyElement(): void {
  //   this.getCtrl('body', this.sitioForm).push(BodyElementComponent.addComponentItem())
  // }

  addFullColumn(): void {
    this.getCtrl('body', this.sitioForm).push(BodyElementComponent.addFullColumn())
  }

  addSplitColumn(): void {
    this.getCtrl('body', this.sitioForm).push(BodyElementComponent.addSplitColumn())
  }

  deleteBodyElement(index: number): void {
    this.getCtrl('body', this.sitioForm).removeAt(index);
  }

  deleteAllBodyElement(): void {
    const bodyCtrl = this.getCtrl('body', this.sitioForm);
    bodyCtrl.clear();
  }

  cancelar():void {
    this.router.navigate(['/sitios']);
  }

  onSubmit(): void {
    console.log(this.sitioForm.value)
  }
}
