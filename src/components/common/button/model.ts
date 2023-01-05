import { ButtonStatus, IButtonStatus } from './type';

export const containedConfig: IButtonStatus = {
  [ButtonStatus.ENABLED]: {
    bgColor: 'gray800',
  },
  [ButtonStatus.HOVER]: {
    bgColor: 'gray500',
  },
  [ButtonStatus.PRESSED]: {
    bgColor: 'gray400',
  },
  [ButtonStatus.DISABLED]: {
    bgColor: 'gray200',
  },
  [ButtonStatus.WITH_ICON]: {
    bgColor: 'gray800',
  },
  [ButtonStatus.ICON_ONLY]: {
    bgColor: 'gray800',
  },
  default: {
    fontColor: 'gray50',
    border: {
      radius: 2,
    },
  },
};

export const outlinedConfig: IButtonStatus = {
  [ButtonStatus.ENABLED]: {
    bgColor: 'gray50',
    fontColor: 'gray800',
  },
  [ButtonStatus.HOVER]: {
    bgColor: 'gray600',
    fontColor: 'gray50',
    border: {
      borderColor: 'gray600',
    },
  },
  [ButtonStatus.PRESSED]: {
    bgColor: 'gray500',
    fontColor: 'gray50',
    border: {
      borderColor: 'gray500',
    },
  },
  [ButtonStatus.DISABLED]: {
    bgColor: 'gray300',
    fontColor: 'gray300',
    border: {
      borderColor: 'gray300',
    },
  },
  [ButtonStatus.WITH_ICON]: {
    bgColor: 'gray800',
  },
  [ButtonStatus.ICON_ONLY]: {
    bgColor: 'gray800',
  },
  default: {
    border: {
      border: 2,
      radius: 2,
      borderColor: 'gray800',
    },
  },
};

export const roundedConfig: IButtonStatus = {
  [ButtonStatus.ENABLED]: {
    bgColor: 'gray800',
  },
  [ButtonStatus.HOVER]: {
    bgColor: 'gray500',
  },
  [ButtonStatus.PRESSED]: {
    bgColor: 'gray400',
  },
  [ButtonStatus.DISABLED]: {
    bgColor: 'gray200',
  },
  [ButtonStatus.WITH_ICON]: {
    bgColor: 'gray800',
  },
  [ButtonStatus.ICON_ONLY]: {
    bgColor: 'gray800',
  },
  default: {
    border: {
      radius: 100,
    },
    fontColor: 'gray50',
  },
};

export const underlineConfig: IButtonStatus = {
  [ButtonStatus.ENABLED]: {},
  [ButtonStatus.HOVER]: {
    bgColor: 'gray100',
  },
  [ButtonStatus.PRESSED]: {},
  [ButtonStatus.DISABLED]: {
    fontColor: 'gray200',
  },
  [ButtonStatus.WITH_ICON]: {},
  [ButtonStatus.ICON_ONLY]: {},
  default: {
    border: {
      border: 2,
      radius: 2,
    },
    bgColor: 'gray50',
    isUnderline: true,
  },
};

export const textConfig: IButtonStatus = {
  [ButtonStatus.ENABLED]: {},
  [ButtonStatus.HOVER]: {
    bgColor: 'gray100',
  },
  [ButtonStatus.PRESSED]: {
    bgColor: 'gray200',
  },
  [ButtonStatus.DISABLED]: {
    fontColor: 'gray200',
  },
  [ButtonStatus.WITH_ICON]: {},
  [ButtonStatus.ICON_ONLY]: {},
  default: {
    fontColor: 'gray800',
    bgColor: 'gray50',
  },
};
