import { ButtonKinds, ButtonStatus, IButtonStatus, PropsType } from './@type';
import {
  containedConfig,
  outlinedConfig,
  roundedConfig,
  textConfig,
  underlineConfig,
} from './model';
import { Colors } from '../../../styles/theme/color';

export const getButtonPropsByButtonKinds = (
  type: ButtonKinds,
  { ...props }: PropsType
): IButtonStatus => {
  switch (type) {
    case ButtonKinds.UNDERLINE:
      return underlineConfig;
    case ButtonKinds.ROUNDED:
      return roundedConfig;
    case ButtonKinds.TEXT:
      return textConfig;
    case ButtonKinds.CONTAINED:
      return containedConfig;
    case ButtonKinds.OUTLINED:
      return outlinedConfig;
  }
};

interface IMutateStyle {
  // TODO 타입 정하
}

// TODO 미완성
export const getButtonStatusPropsByCurrentStatus = ({
  buttonStatus,
  currentStatus,
  mutateStyle,
}: {
  buttonStatus: IButtonStatus;
  currentStatus: ButtonStatus;
  mutateStyle: keyof IMutateStyle;
}) => {
  switch (mutateStyle) {
    case 'bgColor':
    case 'fontColor':
    case 'fillColor':
      const _color =
        buttonStatus[currentStatus][mutateStyle] ??
        buttonStatus.default![mutateStyle];
      console.log(Colors[_color!]);
      return Colors[_color!];
    // case "border":
    //     return buttonStatus[currentStatus][mutateStyle] ?? buttonStatus.default![mutateStyle];
    case 'isUnderline':
      const _isUnderLine =
        buttonStatus[currentStatus]['isUnderline'] ??
        buttonStatus.default!.isUnderline;
      return _isUnderLine ? 'underline' : null;
  }
};
