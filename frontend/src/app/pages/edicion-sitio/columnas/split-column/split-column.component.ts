import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-split-column',
  templateUrl: './split-column.component.html',
  styleUrls: ['./split-column.component.css']
})
export class SplitColumnComponent {
  @Input() public bodyElementForm!: FormGroup;
  @Input() public arrayIndex!: number;
  @Output() public deleteBodyElementEvent: EventEmitter<number> = new EventEmitter<number>();

  static addColumn(): FormGroup {
    return new FormGroup({
      split: new FormGroup({
        dato: new FormControl('')
      }),
    });
  }

  public deleteBodyElement(index: number): void {
    this.deleteBodyElementEvent.next(index);
  }
}
