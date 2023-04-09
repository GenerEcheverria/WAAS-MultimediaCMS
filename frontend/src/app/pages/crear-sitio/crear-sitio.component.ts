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

  constructor(private router: Router,private cdr: ChangeDetectorRef) {
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

  addFullColumn(type:string): void {
    this.getCtrl('body', this.sitioForm).push(BodyElementComponent.addFullColumn(type))
    this.cdr.detectChanges();
  }

  addSplitColumn(leftType:string, rightType:string): void {
    console.log("si")
    this.getCtrl('body', this.sitioForm).push(BodyElementComponent.addSplitColumn(leftType,rightType))
    console.log("2")
    this.cdr.detectChanges();
    console.log("3")
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
