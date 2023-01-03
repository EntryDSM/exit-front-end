import { Weight } from './weight';

const fontToCss = (sz: number, wt: number) =>
  `
  font-weight: ${wt};
  font-size: ${sz}px;
`;

export const fonts = {
  title1: fontToCss(Weight.semiBold, 30),
  title2: fontToCss(Weight.medium, 27),
  title3: fontToCss(Weight.light, 24),
  title4: fontToCss(Weight.thin, 24),
  body1: fontToCss(Weight.medium, 22),
  body2: fontToCss(Weight.regular, 22),
  body3: fontToCss(Weight.medium, 20),
  body4: fontToCss(Weight.regular, 20),
  body5: fontToCss(Weight.medium, 17),
  body6: fontToCss(Weight.regular, 20),
} as const;

export type fontKeyOfType = keyof typeof fonts;
