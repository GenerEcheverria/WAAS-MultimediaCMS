import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
    })
  }

  cancelar():void {
    this.router.navigate(['/sitios']);
  }

  onSubmit(): void {
    console.log(this.sitioForm.value)
  }
}
