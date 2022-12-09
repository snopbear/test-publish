import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'cic-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
  //#region declerations
  // Sets input placeholder text
  @Input() placeholder: string = 'Placeholder';
  // Sets input label text
  @Input() label!: string;
  // Form control name for data binding
  @Input() controlName!: string;
  // Sets chip seperator character
  @Input() sperator: string = '';
  // Displays label as floating label above input
  @Input() floatLabel: boolean = false;
  // External styling class/es
  @Input() styleClass: string = '';

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
