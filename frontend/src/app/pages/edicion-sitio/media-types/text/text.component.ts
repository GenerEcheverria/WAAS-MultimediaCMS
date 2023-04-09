// Dentro de text.component.ts
import { Component,} from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]

})
export class TextComponent {
}
