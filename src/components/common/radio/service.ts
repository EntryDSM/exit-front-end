import { IMutateStyle, IRadioStatus, RadioStatus } from './@type';
import { Colors } from '../../../styles/theme/color';

export const getCheckboxStyleByStatus = ({
  radioStatus,
  currentStatus,
  mutateStyle,
}: {
  radioStatus: IRadioStatus<RadioStatus>;
  currentStatus: RadioStatus;
  mutateStyle: keyof IMutateStyle;
}) => {
  switch (mutateStyle) {
    case 'bgColor':
    case 'fillColor':
      const _color =
        radioStatus[currentStatus][mutateStyle] ??
        radioStatus.default![mutateStyle];
      return Colors[_color!];
    case 'borderColor':
      const _borderColor =
        radioStatus[currentStatus].border?.borderColor ??
        radioStatus.default!.border?.borderColor;
      return Colors[_borderColor!];
    case 'border':
      const border =
        radioStatus[currentStatus].border?.border ??
        radioStatus.default!.border?.border;
      return border + 'px solid';
  }
};
