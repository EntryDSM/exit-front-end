import { colorKeyOfType } from '@styles/theme/color';

export interface PropsTypes {
  name?: string;
  placeholder?: string;
  width?: number | string;
  height?: number | string;
  bgColor?: colorKeyOfType;
  selectModels: ISelectionModels[];
}

export interface ISelectionModels {
  name?: string;
}
