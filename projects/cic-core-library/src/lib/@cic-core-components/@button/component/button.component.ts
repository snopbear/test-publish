import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Severity, Size } from '../../..//@shared/models/types';
import {
  ButtonIconPosition,
  ButtonType,
  ButtonMode,
} from '../models/button-model';

@Component({
  selector: 'cic-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class CICButtonComponent implements OnInit {
  //#region declerations
  @Input() severity: Severity = 'info';
  @Input() isRaised: boolean = false;
  @Input() isRounded: boolean = false;
  @Input() isText: boolean = false;
  @Input() isOutline: boolean = false;
  @Input() label!: string;
  @Input() btnIcon!: string;
  @Input() btnType: ButtonType = 'button';
  @Input() size!: Size;
  @Input() mode!: ButtonMode;
  @Input() badgeValue: string = '0';
  @Input() badgeSeverity: Severity = 'info';
  @Input() iconPos: ButtonIconPosition = 'left';
  // @Output() click: EventEmitter<void> = new EventEmitter();
  _visibleIcon!: string;
  //#endregion declerations

  constructor() {}

  //#region methods
  ngOnInit(): void {
    if (this.btnIcon) {
      this._visibleIcon = `pi ${this.btnIcon}`;
    }
  }
  //#endregion methods
}
