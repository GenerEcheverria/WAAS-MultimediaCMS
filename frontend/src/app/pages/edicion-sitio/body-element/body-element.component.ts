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

  static isFull = true;
  protected isFull = BodyElementComponent.isFull;

  static mediaType = "";
  protected mediaType = BodyElementComponent.mediaType;

  static addFullColumn(type: string): FormGroup {
    BodyElementComponent.isFull = true;
    return this.buildType(type)
  }

  static addSplitColumn(leftType: string, rightType: string): FormGroup {
    BodyElementComponent.isFull = false;
    const left = this.buildType(leftType);
    const right = this.buildType(rightType);
    return new FormGroup({
        left: left,
        right: right,
    });
  }

  public deleteBodyElement(index: number): void {
    this.deleteBodyElementEvent.next(index);
  }

  static buildType(type: string): FormGroup {
    switch (type) {
      case 'Text':
        BodyElementComponent.mediaType = type;
        return new FormGroup({
          text: new FormGroup({
            title: new FormControl(''),
            position: new FormControl(''),
            text: new FormControl(''),
            alignment: new FormControl('')
          }),
        });
      case 'Image':
        return new FormGroup({
          image: new FormGroup({
            title: new FormControl(''),
            image: new FormControl(''),
          }),
        });
      case 'Video':
        return new FormGroup({
          video: new FormGroup({
            title: new FormControl(''),
            url: new FormControl(''),
          }),
        });
      case 'Timeline':
        return new FormGroup({
          timeline: new FormGroup({
            title: new FormControl(''),
          }),
        });
      default:
        return new FormGroup({});
    }
  }
}
