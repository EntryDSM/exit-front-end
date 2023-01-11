import { marginCssType, marginToCss } from '../../../utils/margin';
import { colorKeyOfType } from '../../../styles/theme/color';
import styled from '@emotion/styled';

interface ILayout extends marginCssType {
  minHeight?: number;
  minWidth?: number;
  xPadding?: number;
  bgColor?: colorKeyOfType;
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  align?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  direction?: 'column' | 'row';
  position?: 'absolute' | 'fixed' | 'relative';
  gap?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  width?: string;
  height?: string;
}

export const Layout = styled.div<ILayout>`
  display: flex;
  position: ${({ position }) => position};
  flex-direction: ${({ direction = 'column' }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  min-height: ${({ minHeight }) => minHeight}px;
  min-width: ${({ minWidth }) => minWidth}px;
  padding-left: ${({ xPadding = 0 }) => xPadding}px;
  padding-right: ${({ xPadding = 0 }) => xPadding}px;
  ${({ margin }) => marginToCss({ margin })};
  background-color: ${({ bgColor }) => bgColor};
  gap: ${({ gap }) => gap}px;
  top: ${({ top }) => top}px;
  bottom: ${({ bottom }) => bottom}px;
  left: ${({ left }) => left}px;
  right: ${({ right }) => right}px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
