import { FormGroup, FormGroupDirective } from '@angular/forms';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { FormInputErrorModes } from '../../../../@cic-core-models/types';
import { FormInputErrors } from '../../../../@cic-core-models/interfaces';

@Component({
  selector: 'cic-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class CICRatingComponent implements OnInit {
  //#region Declerations
  // Form control name for data binding (need to be provided otherwise an exception is thrown)
  @Input() controlName!: string;
  // Value for binding if not placed in formGroup
  @Input() value!: number;
  //Show cancel icon
  @Input() showCancel: boolean = false;
  //set rating text
  @Input() label!: string;
  // Number stars
  @Input() stars: number = 5;
  // Show rating as readonly
  @Input() readonly: boolean = false;
  // Control errors messages
  @Input() controlErrors!: FormInputErrors;
  // Class for selected rate
  @Input() onIconClass: string = 'pi-star-fill';
  // Class for normal rate
  @Input() offIconClass: string = 'pi-star';
  // Class for cancel selection
  @Input() cancelIconClass: string = 'pi-ban';
  // Event triggered when value changed when outside of formGroup
  @Output() valueChange: EventEmitter<number | Array<number>> =
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
  // Calls event emitter when value changes
  onChange(newValue: number | Array<number>) {
    this.valueChange.emit(newValue);
  }
  // Fills _errorKeys with controlErrors keys
  getKeys(): void {
    if (this.controlErrors) {
      this._errorKeys = Object.keys(
        this.controlErrors
      ) as Array<FormInputErrorModes>;
    }
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
