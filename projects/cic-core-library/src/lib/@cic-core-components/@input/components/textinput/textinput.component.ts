import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Size } from '../../../../@cic-core-models/types';
import { IconPosition, InputMode } from '../../models/input-model';

@Component({
  selector: 'cic-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.scss'],
})
export class TextinputComponent implements OnInit {
  //#region declerations
  // Sets input viewing & data type
  @Input() type!: InputMode;
  // Sets input label text
  @Input() label!: string;
  // Sets input placeholder text
  @Input() placeholder: string = 'Placeholder';
  // Form control name for data binding
  @Input() controlName!: string;
  // Sets input size (for normal size don't set attribute)
  @Input() size!: Size;
  // Displays label as floating label above input
  @Input() floatLabel: boolean = false;
  // Icon name to be placed next to input
  @Input() icon!: string;
  // Sets icon position (works only if icon is provided)
  @Input() iconPos: IconPosition = 'left';
  // External styling class/es
  @Input() styleClass: string = '';
  // @Input() rightIcon!: string;
  // @Input() leftIcon!: string;

  /* Internal component variables */
  _form!: FormGroup;
  //#endregion declerations

  constructor(private __formDir: FormGroupDirective) {}

  //#region methods
  ngOnInit(): void {
    this._form = this.__formDir.control;
  }
  //#endregion methods
}
