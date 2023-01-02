import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { colorKeyOfType } from '../../../styles/theme/color';
import { fontKeyOfType } from '../../../styles/theme/font';
import { marginCssType, marginToCss } from '../../../utils/margin.tsx';

interface PropsType extends marginCssType {
  className?: string;
  display?: 'inline' | 'inline-block' | 'block';
  size?: fontKeyOfType;
  /** 타입 지정 필요 */
  color?: colorKeyOfType;
  children?: ReactNode;
  onClick?: any;
  cursor?: 'pointer';
  align?: 'center' | 'start' | 'end';
}

export const Text = ({ ...args }: PropsType) => (
  <div {...args}>{args.children}</div>
);

const _Text = styled.div<PropsType>`
  display: ${({ display }) => display};
  color: ${({ color, theme }) => theme.color[color]};
  ${({ size, theme }) => theme.font[size]};
  ${({ margin }) => marginToCss({ margin })};
  cursor: ${({ cursor }) => cursor};
  text-align: ${({ align }) => align};
`;
