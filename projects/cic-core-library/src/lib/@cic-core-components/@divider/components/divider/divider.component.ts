import { Component, Input, OnInit } from '@angular/core';
import {
  DividerHorizontalAlign,
  DividerIconPos,
  DividerLayout,
  DividerMode,
  DividerType,
  DividerVerticalAlign,
} from '../../model/divider.model';

@Component({
  selector: 'cic-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
})
export class CICDividerComponent implements OnInit {
  //#region declerations
  // Text to be placed on divider
  @Input() label!: string;
  // Sets divider line shape
  @Input() type: DividerType = 'solid';
  // Sets divider orientation
  @Input() layout: DividerLayout = 'horizontal';
  // Sets divider header position
  @Input() align: DividerHorizontalAlign | DividerVerticalAlign = 'center';
  // Sets divider mode, for default don't set value to property
  @Input() mode!: DividerMode;
  // External styling class/es
  @Input() styleClass!: string;
  // Icon to be placed next to label (active only in icon mode)
  @Input() icon!: string;
  // Sets icon position
  @Input() iconPos: DividerIconPos = 'left';
  //#endregion declerations

  constructor() {}

  //#region LifeCycle Hooks
  ngOnInit() {
    this.validateLayout();
  }
  //#endregion LifeCycle Hooks

  //#region Methods
  // Check that layout matches align
  validateLayout(): void {
    if (this.layout === 'horizontal' && this.isVerticalAlign(this.align)) {
      throw new Error('Wrong align value');
    } else if (
      this.layout === 'vertical' &&
      this.isHorizontalAlign(this.align)
    ) {
      throw new Error('Wrong align value');
    }
  }
  // Checks is align value matches vertical layout
  isVerticalAlign(
    value: DividerVerticalAlign | DividerHorizontalAlign
  ): boolean {
    return value === 'bottom' || value === 'top';
  }
  // Checks is align value matches horizontal layout
  isHorizontalAlign(
    value: DividerHorizontalAlign | DividerVerticalAlign
  ): boolean {
    return value === 'left' || value === 'right';
  }
  //#endregion Methods
}
