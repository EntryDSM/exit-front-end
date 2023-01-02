const fontToCss = (sz: number, wt: number) =>
  `
  font-weight: ${wt};
  font-size: ${sz}px;
`;

export const font = {
  title1: fontToCss(600, 30),
  title2: fontToCss(500, 27),
  title3: fontToCss(300, 24),
  title4: fontToCss(100, 24),
  body1: fontToCss(500, 22),
  body2: fontToCss(400, 22),
  body3: fontToCss(500, 20),
  body4: fontToCss(400, 20),
  body5: fontToCss(500, 17),
  body6: fontToCss(400, 20),
} as const;

export type fontKeyOfType = keyof typeof font;
