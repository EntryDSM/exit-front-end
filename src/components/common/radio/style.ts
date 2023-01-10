import styled from '@emotion/styled';
import { getCheckboxStyleByStatus } from './service';
import { RadioProps } from './@type';

export const _radio = styled.input<RadioProps>`
  opacity: 0;
  position: absolute;
  width: ${({ width = 24 }) => width}px;
  height: ${({ height = 24 }) => height}px;

  & + label {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 90px;
    width: ${({ width = 24 }) => width}px;
    height: ${({ height = 24 }) => height}px;
    border: ${({ radioStatus, currentStatus }) =>
      getCheckboxStyleByStatus({
        radioStatus,
        currentStatus,
        mutateStyle: 'border',
      })};
    border-color: ${({ radioStatus, currentStatus }) =>
      getCheckboxStyleByStatus({
        radioStatus,
        currentStatus,
        mutateStyle: 'borderColor',
      })};
    background-color: ${({ radioStatus, currentStatus }) =>
      getCheckboxStyleByStatus({
        radioStatus,
        currentStatus,
        mutateStyle: 'bgColor',
      })};
    font-weight: bold;

    &:checked + label {
    }
  }
`;
