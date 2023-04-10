import { ButtonStatus, IButtonStatus } from './@type';

export const containedConfig: IButtonStatus<ButtonStatus> = {
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
    fillColor: 'gray50',
  },
};

export const outlinedConfig: IButtonStatus<ButtonStatus> = {
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
    fillColor: 'gray50',
  },
  [ButtonStatus.PRESSED]: {
    bgColor: 'gray500',
    fontColor: 'gray50',
    border: {
      borderColor: 'gray500',
    },
    fillColor: 'gray50',
  },
  [ButtonStatus.DISABLED]: {
    fontColor: 'gray300',
    border: {
      borderColor: 'gray300',
    },
    fillColor: 'gray300',
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
    fillColor: 'gray800',
  },
};
export const outlinedWhiteConfig: IButtonStatus<ButtonStatus> = {
  [ButtonStatus.ENABLED]: {},
  [ButtonStatus.HOVER]: {},
  [ButtonStatus.PRESSED]: {},
  [ButtonStatus.DISABLED]: {},
  [ButtonStatus.WITH_ICON]: {},
  [ButtonStatus.ICON_ONLY]: {},
  default: {
    bgColor: 'gray900',
    fontColor: 'gray50',
    border: {
      border: 2,
      radius: 2,
      borderColor: 'gray50',
    },
    fillColor: 'gray50',
  },
};
export const roundedConfig: IButtonStatus<ButtonStatus> = {
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
    fillColor: 'gray50',
  },
};

export const underlineConfig: IButtonStatus<ButtonStatus> = {
  [ButtonStatus.ENABLED]: {},
  [ButtonStatus.HOVER]: {
    fontColor: 'gray500',
  },
  [ButtonStatus.PRESSED]: {},
  [ButtonStatus.DISABLED]: {
    fontColor: 'gray200',
  },
  [ButtonStatus.WITH_ICON]: {},
  [ButtonStatus.ICON_ONLY]: {},
  default: {
    bgColor: 'gray50',
    fontColor: 'gray800',
    isUnderline: true,
    border: {
      radius: 2,
    },
  },
};

export const textConfig: IButtonStatus<ButtonStatus> = {
  [ButtonStatus.ENABLED]: {},
  [ButtonStatus.HOVER]: {
    bgColor: 'gray100',
  },
  [ButtonStatus.PRESSED]: {
    bgColor: 'gray200',
  },
  [ButtonStatus.DISABLED]: {
    fontColor: 'gray200',
    fillColor: 'gray200',
  },
  [ButtonStatus.WITH_ICON]: {},
  [ButtonStatus.ICON_ONLY]: {},
  default: {
    fontColor: 'gray800',
    bgColor: 'gray50',
    fillColor: 'gray800',
    border: {
      radius: 2,
    },
  },
};
export const yesConfig: IButtonStatus<ButtonStatus> = {
  [ButtonStatus.ENABLED]: {
    bgColor: 'check',
  },
  [ButtonStatus.HOVER]: {
    fontColor: 'check',
    bgColor: 'check50',
  },
  [ButtonStatus.PRESSED]: {
    bgColor: 'gray300',
  },
  [ButtonStatus.DISABLED]: {
    fontColor: 'gray100',
    bgColor: 'gray200',
  },
  [ButtonStatus.WITH_ICON]: {},
  [ButtonStatus.ICON_ONLY]: {},
  default: {
    fontColor: 'gray50',
    border: {
      radius: 2,
    },
  },
};
export const noConfig: IButtonStatus<ButtonStatus> = {
  [ButtonStatus.ENABLED]: {
    bgColor: 'error',
  },
  [ButtonStatus.HOVER]: {
    fontColor: 'error',
    bgColor: 'error50',
  },
  [ButtonStatus.PRESSED]: {
    bgColor: 'gray300',
  },
  [ButtonStatus.DISABLED]: {
    fontColor: 'gray100',
    bgColor: 'gray200',
  },
  [ButtonStatus.WITH_ICON]: {},
  [ButtonStatus.ICON_ONLY]: {},
  default: {
    fontColor: 'gray50',
    border: {
      radius: 2,
    },
  },
};
