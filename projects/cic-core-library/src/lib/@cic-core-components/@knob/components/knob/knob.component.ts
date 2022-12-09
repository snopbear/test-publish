import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TemplatePosition } from '../../model/knob-model';

@Component({
  selector: 'cic-knob',
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.scss'],
})
export class CICKnobComponent implements OnInit {
  //#region Declerations
  // Value to be binded
  @Input() value!: number;
  // Color of value displayed
  @Input() valueColor: string = '#3B82F6';
  // Color of knob range
  @Input() rangeColor: string = '#dfe7ef';
  // Set label text
  @Input() label!: string;
  // Disable knob
  @Input() disabled: boolean = false;
  // Sets knob min value
  @Input() minValue: number = 0;
  // Sets knob size in pexels
  @Input() size: number = 100;
  // Sets knob max value
  @Input() maxValue: number = 100;
  // Sets knob selection step
  @Input() step: number = 1;
  // Sets stroke thickness
  @Input() strokeWidth: number = 14;
  // Sets template to be placed next to value
  @Input() valueTemplate!: string;
  // Disables knob editing
  @Input() readOnly: boolean = false;
  // Sets valueTemplate position
  @Input() templatePos: TemplatePosition = 'right';
  // Event triggered if value is changed
  @Output() valueChange: EventEmitter<number> = new EventEmitter();

  /* Internal component variables */
  _valueTemplate: string = '{value}';
  //#endregion Declerations

  constructor() {}

  //#region LifeCycle Hooks
  ngOnInit() {
    this.setTemplate();
    this.hasValue();
  }
  //#endregion LifeCycle Hooks

  //#region Methods
  // Triggers valueChange event
  onChange(newValue: number) {
    this.valueChange.emit(newValue);
  }
  // Check if value property is provided
  hasValue(): void {
    if (!this.value) {
      throw new Error('No value attribute provided for binding');
    }
  }
  // Sets value template format
  setTemplate(): void {
    if (this.valueTemplate) {
      this._valueTemplate =
        this.templatePos === 'right'
          ? this._valueTemplate + this.valueTemplate
          : this.valueTemplate + this._valueTemplate;
    }
  }
  //#endregion Methods
}
