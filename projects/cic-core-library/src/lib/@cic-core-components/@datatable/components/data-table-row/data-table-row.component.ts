import { Component, Input } from '@angular/core';
import { TableColumn } from '../../models/datatable-model';
import { DataService } from '../../services/data.service';

@Component({
  selector: '[cic-data-table-row]',
  templateUrl: './data-table-row.component.html',
  styleUrls: ['./data-table-row.component.scss'],
})
export class CICDataTableRowComponent {
  //#region Declerations
  // Array of table column configurations
  @Input() tableColumns!: Array<TableColumn>;
  // Row data object
  @Input() rowItem: any;
  //#endregion Declerations

  constructor(private __dataService: DataService) {}

  //#region Methods
  //Function called on any button click that sends the current row data and the datakey of the clicked button to the service
  buttonClicked(event: string): void {
    this.__dataService.modifyState(event, this.rowItem);
  }

  // Checks wether the input data type is string or not
  isString(value: string | Array<string>): boolean {
    return typeof value === 'string';
  }
  //#endregion Methods
}
