import { EnumInputStatus } from './@type';
import { Colors } from '../../../styles/theme/color';

export const getBorderColorWithStatus = (status: EnumInputStatus) => {
  switch (status) {
    case EnumInputStatus.ENABLE:
      return Colors.gray800;
    case EnumInputStatus.FOCUS:
      return Colors.check;
    case EnumInputStatus.ERROR:
      return Colors.error;
  }
};
