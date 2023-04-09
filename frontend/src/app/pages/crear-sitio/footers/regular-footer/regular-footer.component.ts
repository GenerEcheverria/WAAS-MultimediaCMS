import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-regular-footer',
  templateUrl: './regular-footer.component.html',
  styleUrls: ['./regular-footer.component.css']
})
export class RegularFooterComponent {
  static addFooter(): FormGroup {
    return new FormGroup({
      backgroundColor: new FormControl(''),
        image: new FormControl(''),
        text: new FormControl(''),
        phone: new FormControl(''),
        address: new FormControl(''),
        facebook: new FormControl(''),
        instagram: new FormControl(''),
        twitter: new FormControl(''),
        linkedin: new FormControl(''),
        tiktok: new FormControl(''),
        otro: new FormControl('')
    });
  }
}
