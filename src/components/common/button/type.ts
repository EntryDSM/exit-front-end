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
  children: ReactNode;
}

export interface ButtonProps extends PropsType {
  buttonStatus: IButtonStatus;
  currentStatus: ButtonStatus;
}

export interface IButtonStatus {
  // TODO 이 부분 클린코드하는 법 질문하기
  [ButtonStatus.ENABLED]: ButtonStatusValues;
  [ButtonStatus.HOVER]: ButtonStatusValues;
  [ButtonStatus.DISABLED]: ButtonStatusValues;
  [ButtonStatus.PRESSED]: ButtonStatusValues;
  [ButtonStatus.WITH_ICON]: ButtonStatusValues;
  [ButtonStatus.ICON_ONLY]: ButtonStatusValues;
  default?: ButtonStatusValues;
}

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
