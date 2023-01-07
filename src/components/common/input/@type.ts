import { marginCssType } from '../../../utils/margin';
import { colorKeyOfType } from '../../../styles/theme/color';

export enum EnumInputStatus {
  ENABLE = 'ENABLE',
  FOCUS = 'FOCUS',
  ERROR = 'ERROR',
}

export enum EnumInputAction {
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
  statusTypes: EnumInputStatus;
  placeHolder?: string;
  isHiddenIcon?: boolean;
  as?: 'input' | 'textarea';
}
