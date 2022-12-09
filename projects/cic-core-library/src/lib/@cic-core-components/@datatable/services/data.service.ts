import { BehaviorSubject } from 'rxjs';
import { ButtonConfig, State, TableColumn } from '../models/datatable-model';

// @Injectable({
//   providedIn: 'root',
// })
export class DataService {
  //#region declerations
  // Array of states
  private __dataState: Array<State> = [];
  // Currently active state object when button is clicked
  activeState: BehaviorSubject<State> = new BehaviorSubject<State>({} as State);
  //#endregion declerations

  constructor() {}

  //#region methods
  // Creates states for each column type
  createState(column: TableColumn) {
    switch (column.type) {
      case 'button':
        this.__createButtonStates(column.btnConfig!);
        break;
      case 'switch':
        this.__createSwitchState(column.switchConfig!);
        break;
    }
  }

  // Adds a new state to the array
  private __addState(event: string, initialState: Object): void {
    this.__dataState.push({ event: event, state: initialState! });
  }

  // Creates button states for the provided buttons array
  private __createButtonStates(buttons: Array<ButtonConfig>): void {
    if (!buttons) {
      throw new Error('No btnConfig array provided');
    }
    buttons.forEach((button) => {
      this.__addState(button.event, button.state);
    });
  }

  // Creates a state object for switches
  private __createSwitchState(switchConfig: State): void {
    if (!switchConfig) {
      throw new Error('No switchConfig provided');
    }
    this.__addState(switchConfig.event, switchConfig.state);
  }

  // Finds the state that matches the input datakey value then modifies the state value of that object
  modifyState(event: string, newState: Object): void {
    let index = this.__dataState.findIndex(
      (element: State) => element.event === event
    );

    this.__dataState[index] = {
      ...this.__dataState[index],
      state: JSON.parse(JSON.stringify(newState)),
    };

    this.activeState.next(this.__dataState[index]);
  }
  //#endregion methods
}
