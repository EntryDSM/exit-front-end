export const Colors = {
  gray900: '#000000',
  gray800: '#141414',
  gray700: '#1B1B1B',
  gray600: '#373737',
  gray500: '#545454',
  gray400: '#818181',
  gray300: '#A5A4A4',
  gray200: '#C5C5C5',
  gray100: '#F6F6F6',
  gray50: '#FFFFFF',
  check: '#04DF00',
  error: '#E84045',
  focus: '#006EFF',
  point: '#4ACB67',
} as const;

export type colorKeyOfType = keyof typeof Colors;
