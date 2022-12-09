import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { FormInputErrors } from '../../../../@cic-core-models/interfaces';
import { FormInputErrorModes } from '../../../../@cic-core-models/types';
import { SliderOrientation } from '../../model/slider-model';

@Component({
  selector: 'cic-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class CICSliderComponent implements OnInit {
  //#region Declerations
  // Form control name for data binding (need to be provided if placed if formGroup)
  @Input() controlName!: string;
  // Value for binding if not placed in formGroup
  @Input() value!: number;
  // Slider orientation
  @Input() orientation: SliderOrientation = 'horizontal';
  // Allows range selection (min-max)
  @Input() range: boolean = false;
  // Number of slider steps
  @Input() step!: number;
  // Disables slider editing (in case of formGroup don't use & provide it in formControl)
  @Input() disabled: boolean = false;
  // Min slider value (if range is active)
  @Input() minBoundary: number = 0;
  // Max slider value (if range is active)
  @Input() maxBoundary: number = 100;
  // External styling class/es
  @Input() styleClass!: string;
  //set rating text
  @Input() label!: string;
  // Control errors messages
  @Input() controlErrors!: FormInputErrors;
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
  // Fills _errorKeys with controlErrors keys
  getKeys(): void {
    if (this.controlErrors) {
      this._errorKeys = Object.keys(
        this.controlErrors
      ) as Array<FormInputErrorModes>;
    }
  }
  //#endregion Methods
}
