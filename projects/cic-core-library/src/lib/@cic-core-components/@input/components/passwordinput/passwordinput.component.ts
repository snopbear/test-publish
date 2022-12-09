import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'cic-passwordinput',
  templateUrl: './passwordinput.component.html',
  styleUrls: ['./passwordinput.component.scss'],
})
export class PasswordinputComponent implements OnInit {
  //#region declerations
  // Displays label as floating label above input
  @Input() floatLabel: boolean = false;
  // Shows password input feedback
  @Input() feedback: boolean = false;
  // Shows icon that shows entered password text
  @Input() toggleMask: boolean = false;
  // Sets input label text
  @Input() label!: string;
  // Sets input placeholder text
  @Input() placeholder: string = 'Placeholder';
  // Form control name for data binding
  @Input() controlName!: string;
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
