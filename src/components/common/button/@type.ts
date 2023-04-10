import { colorKeyOfType } from '../../../styles/theme/color';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { IconResponse } from '../../../assets/icon/@type';
import { marginCssType } from '@utils/margin';

export enum ButtonKinds {
  CONTAINED = 'CONTAINED',
  OUTLINED = 'OUTLINED',
  OUTLINED_WHITE = 'OUTLINED_WHITE',
  UNDERLINE = 'UNDERLINE',
  ROUNDED = 'ROUNDED',
  TEXT = 'TEXT',
  YES = 'YES',
  NO = 'NO',
}

export enum ButtonStatus {
  ENABLED = 'ENABLED',
  HOVER = 'HOVER',
  PRESSED = 'PRESSED',
  DISABLED = 'DISABLED',
  WITH_ICON = 'WITH_ICON',
  ICON_ONLY = 'ICON_ONLY',
}

export interface PropsType extends marginCssType {
  className?: string;
  btnKinds: ButtonKinds;
  width?: number | string;
  minWidth?: string;
  height?: number | string;
  minHeight?: string;
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
  mutateButtonPropsSetter: Dispatch<SetStateAction<ButtonProps>>;

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
