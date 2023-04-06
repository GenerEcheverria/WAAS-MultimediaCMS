import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-body-element',
  templateUrl: './body-element.component.html',
  styleUrls: ['./body-element.component.css']
})
export class BodyElementComponent {
  @Input() public bodyElementForm!: FormGroup;
  @Input() public arrayIndex!: number;
  @Output() public deleteBodyElementEvent: EventEmitter<number> = new EventEmitter<number>();


  static addComponentItem(): FormGroup {
    return new FormGroup({
      dato: new FormControl(''),
    });
  }

  public deleteBodyElement(index: number): void {
    this.deleteBodyElementEvent.next(index);
  }
}
