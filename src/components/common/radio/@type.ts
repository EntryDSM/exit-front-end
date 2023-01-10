import { colorKeyOfType } from '../../../styles/theme/color';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export enum CheckboxStatus {
  ENABLED_SELECTED = 'ENABLED_SELECTED',
  ENABLED_UNSELECTED = 'ENABLED_UNSELECTED',
  DISABLED_UNSELECTED = 'DISABLED_UNSELECTED',
  DISABLED_SELECTED = 'DISABLED_SELECTED',
  HOVER = 'HOVER',
}

export interface DispatchActionResponse {
  action: CheckboxStatus;
  mutateCheckboxPropsSetter: Dispatch<SetStateAction<CheckboxProps>>;

  [key: string]: any;
}

export interface PropsType {
  className?: string;
  child?: ReactNode;
  initStatus?: CheckboxStatus;
}

export type ICheckBoxStatus<T extends CheckboxStatus> = {
  [key in T]: CheckboxStatusValues;
} & {
  default: CheckboxStatusValues;
};

interface CheckboxStatusValues {
  border?: BorderProps;
  bgColor?: colorKeyOfType;
  fillColor?: colorKeyOfType;
}

interface BorderProps {
  border?: number;
  radius?: number;
  borderColor?: colorKeyOfType;
}

export interface CheckboxProps extends PropsType {
  checkboxStatus: ICheckBoxStatus<CheckboxStatus>;
  currentStatus: CheckboxStatus;
}

export interface IMutateStyle {
  border?: number;
  radius?: number;
  borderColor?: colorKeyOfType;
  bgColor?: colorKeyOfType;
  fillColor?: colorKeyOfType;
}
