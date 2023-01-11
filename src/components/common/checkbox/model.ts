import { CheckboxStatus, ICheckBoxStatus } from './@type';

export const checkBoxConfig: ICheckBoxStatus<CheckboxStatus> = {
  [CheckboxStatus.HOVER]: {
    bgColor: 'gray100',
    fillColor: 'gray100',
    border: {
      border: 2,
      borderColor: 'gray400',
    },
  },
  [CheckboxStatus.ENABLED_UNSELECTED]: {
    bgColor: 'gray50',
    fillColor: 'gray50',
    border: {
      border: 2,
      borderColor: 'gray400',
    },
  },
  [CheckboxStatus.ENABLED_SELECTED]: {
    bgColor: 'gray800',
    fillColor: 'gray50',
  },
  [CheckboxStatus.DISABLED_SELECTED]: {
    bgColor: 'gray300',
    fillColor: 'gray50',
  },
  [CheckboxStatus.DISABLED_UNSELECTED]: {
    bgColor: 'gray100',
    fillColor: 'gray100',
    border: {
      border: 2,
      borderColor: 'gray200',
    },
  },
  default: {
    border: {
      radius: 2,
    },
  },
};
