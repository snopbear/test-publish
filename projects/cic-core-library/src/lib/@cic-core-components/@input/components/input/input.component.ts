import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { FormInputErrors } from '../../../../@cic-core-models/interfaces';
import { FormInputErrorModes, Size } from '../../../../@cic-core-models/types';
import { IconPosition, InputMode } from '../../models/input-model';

@Component({
  selector: 'cic-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class CICInputComponent implements OnInit {
  //#region declerations
  // Sets input viewing & data type
  @Input() type: InputMode = 'text';
  // Sets input label text
  @Input() label!: string;
  // Sets input placeholder text
  @Input() placeholder: string = 'Placeholder';
  // Form control name for data binding (need to be provided otherwise an exception is thrown)
  @Input() controlName!: string;
  // Sets input size (for normal size don't set attribute)
  @Input() size!: Size;
  // @Input() rightIcon!: string;
  // @Input() leftIcon!: string;
  // Displays label as floating label above input
  @Input() floatLabel: boolean = false;
  // Icon name to be placed next to input
  @Input() icon!: string;
  // Sets icon position (works only if icon is provided)
  @Input() iconPos: IconPosition = 'left';
  // Shows icon that shows entered password text
  @Input() toggleMask: boolean = false;
  // Shows password input feedback
  @Input() passwordFeedback: boolean = true;
  // Sets chip seperator character
  @Input() chipSeperator: string = ',';
  // Control errors messages
  @Input() controlErrors!: FormInputErrors;
  // External styling class/es
  @Input() styleClass: string = '';
  // Enables textarea auto sizing when text is entered
  @Input() autoSize: boolean = false;
  // Sets inital number of textarea rows (works only when autoSize is enabled)
  @Input() rows: number = 2;

  /* Internal component variables */
  _form!: FormGroup;
  // This array is added as a workaround for the issue below, if resolved please update
  // https://github.com/angular/angular/issues/46867
  _errorKeys: Array<FormInputErrorModes> = [];
  //#endregion declerations

  constructor(private __formDir: FormGroupDirective) {}

  //#region LifeCycle Hooks
  ngOnInit(): void {
    this._form = this.__formDir.control;
    this.hasControlName();
    this.getKeys();
  }
  //#endregion LifeCycle Hooks

  //#region Methods
  // Fills _errorKeys with controlErrors keys
  getKeys(): void {
    if (this.controlErrors) {
      this._errorKeys = Object.keys(
        this.controlErrors
      ) as Array<FormInputErrorModes>;
    }
  }
  // Check controlName value
  hasControlName(): void {
    if (!this.controlName) {
      throw new Error('Reactive form detected please provide controlName');
    }
  }
  //#endregion Methods
}
