import { FieldSetData } from './../../model/fieldset-model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cic-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss'],
})
export class CICFieldsetComponent {
  //#region Declerations
  // Data to configure & view fieldset/s
  @Input() data!: FieldSetData | Array<FieldSetData>;
  // External styling class/es
  @Input() styleClass!: string;
  //#endregion Declerations

  constructor() {}

  //#region Methods
  isArray(): boolean {
    return this.data instanceof Array;
  }
  //#endregion Methods
}
