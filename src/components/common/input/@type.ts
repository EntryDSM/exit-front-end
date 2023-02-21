import { marginCssType } from '../../../utils/margin';
import { colorKeyOfType } from '../../../styles/theme/color';

export enum InputStatus {
  ENABLE = 'ENABLE',
  FOCUS = 'FOCUS',
  ERROR = 'ERROR',
}

export enum InputAction {
  FOCUS = 'FOCUS',
  ENABLE = 'ENABLE',
  ERROR = 'ERROR',
}

export interface PropsType extends marginCssType {
  className?: string;
  kindOfInput?: 'default' | 'gray';
  name: string;
  color?: colorKeyOfType;
  width?: number | string;
  height?: number | string;
  placeHolder?: string;
  hasHiddenIcon?: boolean;
  initInputType?: 'text' | 'password' | 'email';
  inputAs?: 'input' | 'textarea';
  error?: string;
  maxLength?: number;
}
