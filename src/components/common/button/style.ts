import styled from '@emotion/styled';
import { ButtonStatus, IButtonProps } from './type';
import { Colors } from '../../../styles/theme/color';

// TODO 스타일 코드 리펙
export const _button = styled.button<IButtonProps>`
  width: ${({ width = 88 }) => width}px;
  height: ${({ height = 46 }) => height}px;
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
  border: ${({ buttonStatus, currentStatus }) =>
    buttonStatus[currentStatus].border?.border ??
    buttonStatus?.default?.border?.border}px solid;
  border-radius: ${({ buttonStatus, currentStatus }) =>
    buttonStatus[currentStatus].border?.radius ??
    buttonStatus.default?.border?.radius}px
}


&:hover {
  background-color: ${({ buttonStatus }) =>
    buttonStatus[ButtonStatus.HOVER].bgColor};
  border: ${({ buttonStatus }) =>
    buttonStatus[ButtonStatus.HOVER].border?.border}px solid;
  color: ${({ buttonStatus }) => buttonStatus[ButtonStatus.HOVER].fontColor};
}

&:active {
  background-color: ${({ buttonStatus }) =>
    buttonStatus[ButtonStatus.PRESSED].bgColor};
  border: ${({ buttonStatus }) =>
    buttonStatus[ButtonStatus.PRESSED].border?.border}px solid;
  color: ${({ buttonStatus }) => buttonStatus[ButtonStatus.PRESSED].fontColor};
}
`;
