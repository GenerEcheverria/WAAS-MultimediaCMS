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

  constructor(private router: Router) {}

  ngOnInit(): void {
      this.initSitioForm();
  }

  initSitioForm(): void {
    this.sitioForm = new FormGroup({
      name: new FormControl(''),
      header: new FormGroup( {
        type: new FormControl(''),
        title: new FormControl(''),
        size: new FormControl('')
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
