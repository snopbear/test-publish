import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { FormInputErrors } from '../../../../@cic-core-models/interfaces';
import { FormInputErrorModes } from '../../../../@cic-core-models/types';
import { HourFormat, CalendarMode } from '../../models/calendar-model';

@Component({
  selector: 'cic-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CICCalendarComponent implements OnInit {
  //#region Declerations
  // Sets input placeholder text
  @Input() placeholder: string = 'Pick Date';
  // Sets input label text
  @Input() label!: string;
  // Sets calendar mode
  @Input() mode!: CalendarMode;
  // Sets calendar date format (refer to http://primefaces.org/primeng/calendar)
  @Input() dateFormat: string = 'dd-mm-yy';
  // Shows/hides calendar icon next to input
  @Input() showCalendarIcon: boolean = false;
  // Enables user editing for selected date (modifiable input)
  @Input() readOnly: boolean = true;
  // Form control name for data binding (need to be provided otherwise an exception is thrown)
  @Input() controlName!: string;
  // Date object used when min-max mode is selected
  @Input() minDate?: Date;
  // Date object used when min-max mode is selected
  @Input() maxDate?: Date;
  // Time selection format (used only in any mode has time enabled)
  @Input() timeFormat: HourFormat = '12';
  // Shows today & clear buttons in date picking
  @Input() showButtons: boolean = false;
  // Shows week numbers in date picking
  @Input() showWeeks: boolean = false;
  // Shows date picking as inline view
  @Input() enableInline: boolean = false;
  // Displays label as floating label above input
  @Input() floatLabel: boolean = false;
  // Control errors messages
  @Input() controlErrors!: FormInputErrors;
  // External styling class/es
  @Input() styleClass!: string;

  /* Internal component variables */
  _form!: FormGroup;
  // This array is added as a workaround for the issue below, if resolved please update
  // https://github.com/angular/angular/issues/46867
  _errorKeys: Array<FormInputErrorModes> = [];
  //#endregion declreation

  constructor(private __formdir: FormGroupDirective) {}

  //#region LifeCycle Hooks
  ngOnInit(): void {
    this._form = this.__formdir.control;
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
