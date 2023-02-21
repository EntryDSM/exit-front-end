import {
  ButtonKinds,
  ButtonStatus,
  IButtonStatus,
  IMutateStyle,
  PropsType,
} from './@type';
import {
  containedConfig,
  noConfig,
  outlinedConfig,
  outlinedWhiteConfig,
  roundedConfig,
  textConfig,
  underlineConfig,
  yesConfig,
} from './model';
import { Colors } from '../../../styles/theme/color';

export const getButtonPropsByButtonKinds = (
  type: ButtonKinds,
  { ...props }: PropsType
): IButtonStatus<ButtonStatus> => {
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
    case ButtonKinds.OUTLINED_WHITE:
      return outlinedWhiteConfig;
    case ButtonKinds.YES:
      return yesConfig;
    case ButtonKinds.NO:
      return noConfig;
  }
};
// TODO Refactor : 후에 처리하는 스타일의 공통된 집합에 따라 통합하여 리팩하기
export const getButtonStyleByMutateStyle = ({
  buttonStatus,
  currentStatus,
  mutateStyle,
}: {
  buttonStatus: IButtonStatus<ButtonStatus>;
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
      return Colors[_color!];
    case 'borderColor':
      const _borderColor =
        buttonStatus[currentStatus].border?.borderColor ??
        buttonStatus.default!.border?.borderColor;
      return Colors[_borderColor!];
    case 'radius':
      const radius =
        buttonStatus[currentStatus].border?.radius ??
        buttonStatus.default!.border?.radius;
      return radius + 'px';
    case 'border':
      const border =
        buttonStatus[currentStatus].border?.border ??
        buttonStatus.default!.border?.border;
      return border + 'px solid';
    case 'isUnderline':
      const _isUnderLine =
        buttonStatus[currentStatus]['isUnderline'] ??
        buttonStatus.default!.isUnderline;
      return _isUnderLine ? 'underline' : null;
  }
};
