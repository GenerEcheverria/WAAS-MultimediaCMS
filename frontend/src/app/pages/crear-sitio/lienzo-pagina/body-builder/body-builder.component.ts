import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-builder',
  templateUrl: './body-builder.component.html',
  styleUrls: ['./body-builder.component.css']
})
export class BodyBuilderComponent implements OnInit {
  @Input() webContent: any;
  protected full: any;
  protected fullType!: string;
  protected left: any;
  protected leftType!: string;
  protected right: any;
  protected rightType!: string;
  protected columns: any

  ngOnInit(): void {
    const item = this.webContent;
    if (Object.keys(item).length == 1) {
      this.columns = false;
      this.full = item.full;
      this.fullType = Object.keys(this.full)[0];
    } else {
      this.columns = true;
      console.log(item.left, item.right)
      this.left = item.left
      this.leftType = Object.keys(this.left)[0];
      this.right = item.right
      this.rightType = Object.keys(this.right)[0];
    }

  }
}