import styled from '@emotion/styled';
import { ButtonProps } from './@type';
import { Colors } from '../../../styles/theme/color';

// TODO 스타일 코드 리펙
export const _button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width = 88 }) => width}px;
  height: ${({ height = 46 }) => height}px;
  text-decoration: ${({ buttonStatus, currentStatus }) => {
    const isUnderLine =
      buttonStatus[currentStatus]['isUnderline'] ??
      buttonStatus.default?.isUnderline;
    return isUnderLine ? 'underline' : null;
  }};
  color: ${({ buttonStatus, currentStatus }) => {
    const _color =
      buttonStatus[currentStatus].fontColor ?? buttonStatus.default?.fontColor;
    return Colors[_color!];
  }};
  background-color: ${({ buttonStatus, currentStatus }) => {
    const _color =
      buttonStatus[currentStatus].bgColor ?? buttonStatus?.default?.bgColor;
    return Colors[_color!];
  }};
  border: ${({ buttonStatus, currentStatus }) => {
    return `${
      buttonStatus[currentStatus].border?.border ??
      buttonStatus?.default?.border?.border
    }px solid`;
  }};
  border-color: ${({ buttonStatus, currentStatus }) => {
    const color =
      buttonStatus[currentStatus].border?.borderColor ??
      buttonStatus.default?.border?.borderColor;
    return Colors[color!];
  }};
  border-radius: ${({ buttonStatus, currentStatus }) =>
    buttonStatus[currentStatus].border?.radius ??
    buttonStatus.default?.border?.radius}px
}

;

`;
