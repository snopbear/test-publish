import { Component, Input } from '@angular/core';

@Component({
  selector: 'cic-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class CICImageComponent {
  //#region Declerations
  // Show image preview
  @Input() showPreview: boolean = false;
  // Image width
  @Input() width!: string;
  // Image height
  @Input() height!: string;
  // Image src directory
  @Input() src!: string;
  // Image alt text
  @Input() alt!: string;
  // Image style class
  @Input() imageStyle!: string;
  // External class/es for component
  @Input() styleClass!: string;
  // Custom preview
  @Input() customPreview: boolean = false;
  //#endregion Declerations

  constructor() {}
}
