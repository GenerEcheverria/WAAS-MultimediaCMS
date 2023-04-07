import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-full-column',
  templateUrl: './full-column.component.html',
  styleUrls: ['./full-column.component.css']
})
export class FullColumnComponent {
  static addColumn(): FormGroup {
    return new FormGroup({
      full: new FormGroup({
        dato: new FormControl('')
      }),
    });
  }
}
