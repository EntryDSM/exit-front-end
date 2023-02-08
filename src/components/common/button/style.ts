import styled from '@emotion/styled';
import { ButtonProps } from './@type';
import { getButtonStyleByMutateStyle } from './service';
import { marginToCss } from '@utils/margin';

export const _button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ margin }) => marginToCss({ margin })};
  width: ${({ width = 88 }) =>
    typeof width == 'string' ? width : width + 'px'};
  min-width: ${({ minWidth }) => minWidth};
  min-height: ${({ minHeight }) => minHeight};
  height: ${({ height = 46 }) =>
    typeof height == 'string' ? height : height + 'px'};
  text-decoration: ${({ buttonStatus, currentStatus }) =>
    getButtonStyleByMutateStyle({
      buttonStatus,
      currentStatus,
      mutateStyle: 'isUnderline',
    })};
  color: ${({ buttonStatus, currentStatus }) =>
    getButtonStyleByMutateStyle({
      buttonStatus,
      currentStatus,
      mutateStyle: 'fontColor',
    })};
  background-color: ${({ buttonStatus, currentStatus }) =>
    getButtonStyleByMutateStyle({
      buttonStatus,
      currentStatus,
      mutateStyle: 'bgColor',
    })};
  border: ${({ buttonStatus, currentStatus }) =>
    getButtonStyleByMutateStyle({
      buttonStatus,
      currentStatus,
      mutateStyle: 'border',
    })};
  border-radius: ${({ buttonStatus, currentStatus }) =>
    getButtonStyleByMutateStyle({
      buttonStatus,
      currentStatus,
      mutateStyle: 'radius',
    })};
  border-color: ${({ buttonStatus, currentStatus }) =>
    getButtonStyleByMutateStyle({
      buttonStatus,
      currentStatus,
      mutateStyle: 'borderColor',
    })}
}

}

;
border-radius: ${({ buttonStatus, currentStatus }) =>
  getButtonStyleByMutateStyle({
    buttonStatus,
    currentStatus,
    mutateStyle: 'radius',
  })}

;

`;
