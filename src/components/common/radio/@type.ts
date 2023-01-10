import { colorKeyOfType } from '../../../styles/theme/color';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export enum RadioStatus {
  ENABLED_SELECTED = 'ENABLED_SELECTED',
  ENABLED_UNSELECTED = 'ENABLED_UNSELECTED',
  DISABLED_UNSELECTED = 'DISABLED_UNSELECTED',
  DISABLED_SELECTED = 'DISABLED_SELECTED',
  HOVER = 'HOVER',
}

export interface DispatchActionResponse {
  action: RadioStatus;
  mutateCheckboxPropsSetter: Dispatch<SetStateAction<RadioProps>>;

  [key: string]: any;
}

export interface PropsType {
  className?: string;
  child?: ReactNode;
  initStatus?: RadioStatus;
  width?: number;
  height?: number;
}

export type IRadioStatus<T extends RadioStatus> = {
  [key in T]: RadioStatusValues;
} & {
  default: RadioStatusValues;
};

interface RadioStatusValues {
  border?: BorderProps;
  bgColor?: colorKeyOfType;
  fillColor?: colorKeyOfType;
}

interface BorderProps {
  border?: number;
  borderColor?: colorKeyOfType;
}

export interface RadioProps extends PropsType {
  radioStatus: IRadioStatus<RadioStatus>;
  currentStatus: RadioStatus;
}

export interface IMutateStyle {
  border?: number;
  radius?: number;
  borderColor?: colorKeyOfType;
  bgColor?: colorKeyOfType;
  fillColor?: colorKeyOfType;
}
