import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Size } from '../../../../@cic-core-models/types';
import {
  State,
  TableColumn,
  TableScrollHeight,
} from '../../models/datatable-model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'cic-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  providers: [DataService],
})

// How the table works:
// - Firstly you need to pass an array of TableColumn object that contains the configuration of each column
// - If the type of column is button then on table init a state is created for each button based on the event attribute provided
//   and the activeState is subscribed to by the table component to sense any changes once a button is clicked
// - If a button is clicked it calls the modify method of the service & sends it's event name to it to alter the currently
//   active state and once the state is updated it triggers the subscriber which triggers the stateChange event sending
//   the event of the clicked button and the row object data associated

// For SSR (lazy loading):
// - Set lazy attribute to true
// - Pass a function to onLazyLoad event
// - Set loading attribute to true when fetching data

// Check link: http://primefaces.org/primeng/table/lazy

// Performance Tips
// - When selection is enabled use dataKey to avoid deep checking when comparing objects.
// - Use rowTrackBy to avoid unnecessary dom operations.
// - Prefer lazy loading for large datasets.
export class CICDataTableComponent implements OnInit, OnDestroy {
  //#region Declerations
  // Datatable configuration array (sets viewing mode for each column)
  @Input() tableColumns: Array<TableColumn> = [];
  // Array of data to be viewed in rows
  @Input() data: Array<any> = [];
  // Sets table view size
  @Input() size!: Size;
  // Enables table gridlines
  @Input() gridLines: boolean = false;
  // Enables stripped rows
  @Input() isStriped: boolean = false;
  // Enables pagination in table
  @Input() paginate: boolean = false;
  // Sets the list of number of pagination rows
  @Input() rowsPerPageOptions!: Array<number>;
  // Sets number of pagination rows
  @Input() rowsCountPerPage!: number;
  // Shows pagination report (works only when pagination is enabled)
  @Input() showPageReport: boolean = false;
  // Sets caption message for table caption section
  @Input() captionMessage!: string;
  // Sets summary message for table summary section
  @Input() summaryMessage!: string;
  // Enables scrolling inside table
  @Input() isScrollable: boolean = false;
  // Sets scroll height (works only when isScrollable is enabled)
  @Input() scrollHeight: TableScrollHeight = 'flex';
  @Input() hasAddButton: boolean = false;
  // Event triggered whenever any statefulcomponent is clicked
  @Output() stateChange: EventEmitter<State> = new EventEmitter();
  //#endregion Declerations

  constructor(private __dataService: DataService) {}

  //#region LifeCycle Hooks
  ngOnInit(): void {
    this.validatePagination();
    this.initSubscribtion();
    this.generateStates();
  }

  ngOnDestroy(): void {
    this.__dataService.activeState.unsubscribe();
  }
  //#endregion LifeCycle Hooks

  //#region Methods
  //Validations on rowsCountPerPage
  validatePagination(): void {
    if (this.rowsPerPageOptions) {
      this.rowsCountPerPage = this.rowsPerPageOptions[0];
    } else if (!this.rowsCountPerPage) {
      this.rowsCountPerPage = 5;
    }
  }
  //Subscribtion to datastate behaviour subject in service to trigger event when any state updates
  initSubscribtion(): void {
    this.__dataService.activeState.subscribe((state: State) => {
      if (state.event) this.stateChange.emit(state);
    });
  }
  // Creates state for stateful columns
  generateStates(): void {
    //Finds columns that have button or switch type to add new state for each
    const states = this.tableColumns.filter(
      (element: TableColumn) =>
        element.type === 'button' || element.type === 'switch'
    );

    // Loops on found objects and creates state for each
    if (states.length > 0) {
      states.forEach((element: TableColumn) => {
        this.__dataService.createState(element);
      });
    }
  }
  //#endregion Methods
}
