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
  name: string;
  color?: colorKeyOfType;
  width?: number;
  height?: number;
  placeHolder?: string;
  hasHiddenIcon?: boolean;
  initInputType?: 'text' | 'password';
  as?: 'input' | 'textarea';
  error?: string;
}
