export const Weight = {
  semiBold: 600,
  medium: 500,
  regular: 400,
  light: 300,
  thin: 100,
} as const;

export type weightKeyOfType = keyof typeof Weight;
