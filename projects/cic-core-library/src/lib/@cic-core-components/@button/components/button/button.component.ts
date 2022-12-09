import { Component, Input, OnInit } from '@angular/core';
import { Severity, Size } from '../../../../@cic-core-models/types';
import {
  ButtonIconPosition,
  ButtonType,
  ButtonMode,
} from '../../models/button-model';

@Component({
  selector: 'cic-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class CICButtonComponent implements OnInit {
  //#region Declerations
  // Sets button color based on imported theme file in project
  @Input() severity: Severity = 'info';
  // Sets button shape to raised
  @Input() isRaised: boolean = false;
  // Sets button shape to rounded
  @Input() isRounded: boolean = false;
  // Sets button shape to text
  @Input() isText: boolean = false;
  // Sets button shape to outline
  @Input() isOutline: boolean = false;
  // Sets button text
  @Input() label!: string;
  // Sets button icon
  @Input() btnIcon!: string;
  // Sets button type (for forms use submit type)
  @Input() btnType: ButtonType = 'button';
  // Sets button size (for normal size don't set attribute)
  @Input() size!: Size;
  // Sets button viewing mode
  @Input() mode!: ButtonMode;
  // Sets badge value (works with badge button mode only)
  @Input() badgeValue: string = '0';
  // Sets bagde color (works with badge button mode only)
  @Input() badgeSeverity: Severity = 'info';
  // Sets icon position (works only if icon is provided)
  @Input() iconPos: ButtonIconPosition = 'left';
  // External styling class/es
  @Input() styleClass!: string;
  // @Output() click: EventEmitter<void> = new EventEmitter();

  /* Internal component variables */
  _visibleIcon!: string;
  //#endregion Declerations

  constructor() {}

  //#region LifeCycle Hooks
  ngOnInit(): void {
    if (this.btnIcon) {
      this._visibleIcon = `pi ${this.btnIcon}`;
    }
  }
  //#endregion LifeCycle Hooks
}
