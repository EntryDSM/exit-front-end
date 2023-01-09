import styled from '@emotion/styled';
import { ButtonProps } from './@type';
import { getButtonStatusStylePropsByMutateStyle } from './service';

export const _button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width = 88 }) => width}px;
  height: ${({ height = 46 }) => height}px;
  text-decoration: ${({ buttonStatus, currentStatus }) =>
    getButtonStatusStylePropsByMutateStyle({
      buttonStatus,
      currentStatus,
      mutateStyle: 'isUnderline',
    })};
  color: ${({ buttonStatus, currentStatus }) =>
    getButtonStatusStylePropsByMutateStyle({
      buttonStatus,
      currentStatus,
      mutateStyle: 'fontColor',
    })};
  background-color: ${({ buttonStatus, currentStatus }) =>
    getButtonStatusStylePropsByMutateStyle({
      buttonStatus,
      currentStatus,
      mutateStyle: 'bgColor',
    })};
  border: ${({ buttonStatus, currentStatus }) =>
    getButtonStatusStylePropsByMutateStyle({
      buttonStatus,
      currentStatus,
      mutateStyle: 'border',
    })};
  border-color: ${({ buttonStatus, currentStatus }) =>
    getButtonStatusStylePropsByMutateStyle({
      buttonStatus,
      currentStatus,
      mutateStyle: 'borderColor',
    })}
}

}

;
border-radius: ${({ buttonStatus, currentStatus }) =>
  getButtonStatusStylePropsByMutateStyle({
    buttonStatus,
    currentStatus,
    mutateStyle: 'radius',
  })}

;

`;
