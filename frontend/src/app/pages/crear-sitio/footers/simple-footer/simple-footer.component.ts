import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-footer',
  templateUrl: './simple-footer.component.html',
  styleUrls: ['./simple-footer.component.css']
})
export class SimpleFooterComponent {
  static addFooter(): FormGroup{
    return new FormGroup({
      backgroundColor: new FormControl(''),
        facebook: new FormControl(''),
        instagram: new FormControl(''),
        twitter: new FormControl(''),
        linkedin: new FormControl(''),
        tiktok: new FormControl(''),
        otro: new FormControl('')
    });
  }
}
