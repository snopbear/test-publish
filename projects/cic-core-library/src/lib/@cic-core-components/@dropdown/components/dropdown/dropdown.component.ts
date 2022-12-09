import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { FormInputErrors } from '../../../../@cic-core-models/interfaces';
import { FormInputErrorModes } from '../../../../@cic-core-models/types';
import {
  DropDownItem,
  DropDownMode,
  MultiMode,
} from '../../models/dropdown-model';

@Component({
  selector: 'cic-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class CICDropdownComponent implements OnInit {
  //#region declerations
  // Sets input label text
  @Input() label!: string;
  // Sets input placeholder text
  @Input() placeholder: string = 'Select Item';
  // Shows clear selected item button
  @Input() showClear: boolean = false;
  @Input() editable: boolean = false;
  // Enables search bar in dropdown
  @Input() enableFilter: boolean = false;
  // Data to be viewed & selected in component
  @Input() data: Array<DropDownItem> = [];
  // Form control name for data binding (need to be provided otherwise an exception is thrown)
  @Input() controlName!: string;
  // Enables multi-select dropdown
  @Input() multiSelect: boolean = false;
  // Sets dropdown display mode
  @Input() mode!: DropDownMode;
  // Sets flag icons to rounded (takes effect only in text-flag mode)
  @Input() roundedFlagIcon: boolean = false;
  // Changes multi-selction dropdown mode (takes effect only when multiSelect is enabled)
  @Input() multiSelectMode!: MultiMode;
  // Adds support for autocomplete when user types in field
  @Input() autoComplete: boolean = false;
  // Displays label as floating label above input
  @Input() floatLabel: boolean = false;
  // Control errors messages
  @Input() controlErrors!: FormInputErrors;
  // External styling class/es
  @Input() styleClass!: string;

  /* Internal component variables */
  _form!: FormGroup;
  // Currently selected dropdown object (used to set view)
  _selectedItem!: DropDownItem;
  // Currently selected dropdown object (used to set view), applies in multiselect
  _selectedItems: Array<DropDownItem> = [];
  // Filter result objects (used when autoComplete is enabled)
  _filteredResults: Array<DropDownItem> = [];
  // Activates multi mode for autocomplete
  _multiAutoComplete: boolean = false;
  // This array is added as a workaround for the issue below, if resolved please update
  // https://github.com/angular/angular/issues/46867
  _errorKeys: Array<FormInputErrorModes> = [];
  //#endregion declerations

  constructor(private __formDir: FormGroupDirective) {}

  //#region LifeCycle Hooks
  ngOnInit(): void {
    this._form = this.__formDir.control;
    // If autocomplete is activated it disables multiSelect to avoid wrong rendering
    if (this.autoComplete && this.multiSelect) {
      this.multiSelect = false;
      this._multiAutoComplete = true;
    }
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
  // Sets _selectedItem to the selected object to be viewed
  changed(item: DropDownItem): void {
    this._selectedItem = this.data.find(
      (element: DropDownItem) => element.value === item.value
    )!;
  }
  // Filters array based on user input
  search(event: { originalEvent: Event; query: string }): void {
    this._filteredResults = this.data.filter((item) =>
      item.key.toLowerCase().includes(event.query.toLowerCase())
    );
  }
  //#endregion Methods
}
