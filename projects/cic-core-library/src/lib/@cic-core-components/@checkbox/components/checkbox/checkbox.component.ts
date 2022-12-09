import { FormGroup, FormGroupDirective } from '@angular/forms';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import {
  FormInputErrors,
  GeneralItem,
} from '../../../../@cic-core-models/interfaces';
import { FormInputErrorModes } from '../../../../@cic-core-models/types';

@Component({
  selector: 'cic-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CICCheckboxComponent implements OnInit {
  //#region Declerations
  // Array of checkbox items
  @Input() data: Array<GeneralItem> = [];
  // Form control name for data binding (need to be provided otherwise an exception is thrown)
  @Input() controlName!: string;
  // Value for binding if not placed in formGroup
  @Input() value!: string;
  // External styling class/es
  @Input() styleClass!: string;
  // Control errors messages
  @Input() controlErrors!: FormInputErrors;
  // Event triggered when value changed when outside of formGroup
  @Output() valueChange: EventEmitter<string | Array<string>> =
    new EventEmitter();

  /* Internal component variables */
  _form!: FormGroup;
  // This array is added as a workaround for the issue below, if resolved please update
  // https://github.com/angular/angular/issues/46867
  _errorKeys: Array<FormInputErrorModes> = [];
  //#endregion Declerations

  constructor(@Optional() private __formdir: FormGroupDirective) {}

  //#region LifeCycle Hooks
  ngOnInit() {
    if (this.__formdir) {
      this._form = this.__formdir.control;
    }
    this.validateBinding();
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
  // Calls event emitter when value changes
  onChange(newValue: string | Array<string>) {
    this.valueChange.emit(newValue);
  }
  // Validates binding provided
  validateBinding(): void {
    if ((this._form ? !this.value : this.value) === undefined) {
      throw new Error('No binding provided');
    } else if (this._form && !this.controlName) {
      throw new Error('Reactive form detected please provide controlName');
    } else if (this._form && this.value !== undefined) {
      throw new Error('FormGroup detected remove value binding');
    }
  }
  //#endregion Methods
}
