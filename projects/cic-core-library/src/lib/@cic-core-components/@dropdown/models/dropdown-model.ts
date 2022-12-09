import { GeneralItem } from '../../../@cic-core-models/interfaces';

export interface DropDownItem extends GeneralItem {
  iconURL?: string;
  iconName?: string;
}

export declare type DropDownMode = 'text-flag' | 'text-svg' | 'text-icon';

export declare type MultiMode = 'chip' | 'template';
