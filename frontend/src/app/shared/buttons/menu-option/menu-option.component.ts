import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.css']
})
export class MenuOptionComponent {
  @Input() titulo: string =""
  @Input() link: string = ""
  @Input() icon: string = ""
}
