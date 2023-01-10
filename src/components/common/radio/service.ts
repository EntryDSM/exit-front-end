import { CheckboxStatus, ICheckBoxStatus, IMutateStyle } from './@type';
import { Colors } from '../../../styles/theme/color';

export const getCheckboxStyleByStatus = ({
  checkboxStatus,
  currentStatus,
  mutateStyle,
}: {
  checkboxStatus: ICheckBoxStatus<CheckboxStatus>;
  currentStatus: CheckboxStatus;
  mutateStyle: keyof IMutateStyle;
}) => {
  switch (mutateStyle) {
    case 'bgColor':
    case 'fillColor':
      const _color =
        checkboxStatus[currentStatus][mutateStyle] ??
        checkboxStatus.default![mutateStyle];
      return Colors[_color!];
    case 'borderColor':
      const _borderColor =
        checkboxStatus[currentStatus].border?.borderColor ??
        checkboxStatus.default!.border?.borderColor;
      return Colors[_borderColor!];
    case 'border':
      const border =
        checkboxStatus[currentStatus].border?.border ??
        checkboxStatus.default!.border?.border;
      return border + 'px solid';
    case 'radius':
      const radius =
        checkboxStatus[currentStatus].border?.radius ??
        checkboxStatus.default!.border?.radius;
      return radius + 'px';
  }
};
