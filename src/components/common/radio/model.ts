import { IRadioStatus, RadioStatus } from './@type';

export const radioConfig: IRadioStatus<RadioStatus> = {
  [RadioStatus.HOVER]: {
    bgColor: 'gray100',
    fillColor: 'gray100',
    border: {
      border: 2,
      borderColor: 'gray400',
    },
  },
  [RadioStatus.ENABLED_UNSELECTED]: {
    bgColor: 'gray50',
    fillColor: 'gray50',
    border: {
      border: 2,
      borderColor: 'gray400',
    },
  },
  [RadioStatus.ENABLED_SELECTED]: {
    bgColor: 'gray50',
    fillColor: 'gray50',
    border: {
      border: 2,
      borderColor: 'gray800',
    },
  },
  [RadioStatus.DISABLED_SELECTED]: {
    bgColor: 'gray50',
    fillColor: 'gray300',
  },
  [RadioStatus.DISABLED_UNSELECTED]: {
    bgColor: 'gray100',
    fillColor: 'gray100',
    border: {
      border: 2,
      borderColor: 'gray200',
    },
  },
  default: {},
};
