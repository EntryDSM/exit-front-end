import { colorKeyOfType } from '../../../styles/theme/color';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { IconResponse } from '../../../assets/icon/@type';

export enum ButtonKinds {
  CONTAINED = 'CONTAINED',
  OUTLINED = 'OUTLINED',
  UNDERLINE = 'UNDERLINE',
  ROUNDED = 'ROUNDED',
  TEXT = 'TEXT',
}

export enum ButtonStatus {
  ENABLED = 'ENABLED',
  HOVER = 'HOVER',
  PRESSED = 'PRESSED',
  DISABLED = 'DISABLED',
  WITH_ICON = 'WITH_ICON',
  ICON_ONLY = 'ICON_ONLY',
}

export interface PropsType {
  className?: string;
  btnKinds: ButtonKinds;
  width?: number;
  height?: number;
  icon?: (props: IconResponse) => JSX.Element;
  initStatus?: ButtonStatus;
  children?: ReactNode;
}

export interface ButtonProps extends PropsType {
  buttonStatus: IButtonStatus<ButtonStatus>;
  currentStatus: ButtonStatus;
}

export type IButtonStatus<T extends ButtonStatus> = {
  [key in T]: ButtonStatusValues;
} & {
  default?: ButtonStatusValues;
};

export interface ButtonStatusValues {
  border?: BorderProps;
  bgColor?: colorKeyOfType;
  fontColor?: colorKeyOfType;
  isUnderline?: boolean;
  fillColor?: colorKeyOfType;
}

export interface BorderProps {
  border?: number;
  borderColor?: colorKeyOfType;
  radius?: number;
}

export interface DispatchActionResponse {
  action: ButtonStatus;
  mutationButtonPropsSetter: Dispatch<SetStateAction<ButtonProps>>;

  [key: string]: any;
}

export type IMutateStyle = {
  bgColor?: colorKeyOfType;
  fontColor?: colorKeyOfType;
  fillColor?: colorKeyOfType;
  borderColor?: colorKeyOfType;
  border?: number;
  radius?: number;
  isUnderline?: boolean;
};