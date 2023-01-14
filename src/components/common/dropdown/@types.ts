import { colorKeyOfType } from '../../../styles/theme/color';

export interface PropsTypes {
  title?: string;
  width?: number;
  height?: number;
  bgColor?: colorKeyOfType;
  selectModels: ISelectionModels[];
}

export interface ISelectionModels {
  name?: string;
}
