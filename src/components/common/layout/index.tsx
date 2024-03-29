import { marginCssType, marginToCss } from '../../../utils/margin';
import { colorKeyOfType, Colors } from '../../../styles/theme/color';
import styled from '@emotion/styled';

// TODO : 공통된 속성은 margin 처럼 따로 분리해야 한다.
interface ILayout extends marginCssType {
  minHeight?: string;
  minWidth?: string;
  xPadding?: string;
  yPadding?: string;
  bgColor?: colorKeyOfType;
  background?: string;
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  align?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  direction?: 'column' | 'row';
  position?: 'absolute' | 'fixed' | 'relative';
  gap?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  borderColor?: colorKeyOfType;
  overflow?: string;
  alignSelf?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  zIndex?: number;
}

export const Layout = styled.div<ILayout>`
  display: flex;
  position: ${({ position }) => position};
  flex-direction: ${({ direction = 'column' }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  min-height: ${({ minHeight }) => minHeight};
  min-width: ${({ minWidth }) => minWidth};
  padding-left: ${({ xPadding = 0 }) => xPadding};
  padding-right: ${({ xPadding = 0 }) => xPadding};
  padding-top: ${({ yPadding = 0 }) => yPadding};
  padding-bottom: ${({ yPadding = 0 }) => yPadding};
  ${({ margin }) => marginToCss({ margin })};
  background-color: ${({ bgColor }) => Colors[bgColor!]};
  background: ${({ background }) => background};
  gap: ${({ gap }) => gap};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-color: ${({ borderColor }) => borderColor};
  overflow: ${({ overflow }) => overflow};
  align-self: ${({ alignSelf }) => alignSelf};
  z-index: ${({ zIndex }) => zIndex};
`;
