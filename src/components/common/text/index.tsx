import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { colorKeyOfType } from '../../../styles/theme/color';
import { fontKeyOfType } from '../../../styles/theme/fonts';
import { marginCssType, marginToCss } from '../../../utils/margin';

type TDisplay = 'inline' | 'inline-block' | 'block';
type TAlign = 'center' | 'start' | 'end';

interface PropsType extends marginCssType {
  className?: string;
  display?: TDisplay;
  size?: fontKeyOfType;
  /** 타입 지정 필요 */
  color?: colorKeyOfType;
  children?: ReactNode;
  onClick?: any;
  cursor?: 'pointer';
  align?: TAlign;
}

export const Text = ({ ...props }: PropsType) => (
  <_Text {...props}>{props.children}</_Text>
);

const _Text = styled.div<PropsType>`
  display: ${({ display }) => display};
  color: ${({ color, theme }) => theme.color[color!]};
  ${({ size, theme }) => theme.font[size!]};
  ${({ margin }) => marginToCss({ margin })};
  cursor: ${({ cursor }) => cursor};
  text-align: ${({ align }) => align};
`;
