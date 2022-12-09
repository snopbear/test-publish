import { Severity } from '../../../@cic-core-models/types';

//Types
export declare type ColumnType =
  | 'text'
  | 'image'
  | 'checkbox'
  | 'button'
  | 'switch'
  | 'link';

export declare type TableScrollHeight = number | 'flex';

//Interfaces
export interface State {
  event: string;
  state?: any;
}

export interface ButtonConfig extends State {
  label?: string;
  severity?: Severity;
  icon?: string;
}

export interface TableColumn {
  title: string;
  type: ColumnType;
  dataKey?: string;
  btnConfig?: Array<ButtonConfig>;
  switchConfig?: State;
}
