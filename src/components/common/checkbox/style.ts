import styled from '@emotion/styled';
import { getCheckboxStyleByStatus } from './service';
import { CheckboxProps } from './@type';

export const _checkbox = styled.input<CheckboxProps>`
  opacity: 0;
  position: absolute;

  & + label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border: ${({ checkboxStatus, currentStatus }) =>
      getCheckboxStyleByStatus({
        checkboxStatus,
        currentStatus,
        mutateStyle: 'border',
      })};
    border-color: ${({ checkboxStatus, currentStatus }) =>
      getCheckboxStyleByStatus({
        checkboxStatus,
        currentStatus,
        mutateStyle: 'borderColor',
      })};
    border-radius: ${({ checkboxStatus, currentStatus }) =>
      getCheckboxStyleByStatus({
        checkboxStatus,
        currentStatus,
        mutateStyle: 'radius',
      })};
    background-color: ${({ checkboxStatus, currentStatus }) =>
      getCheckboxStyleByStatus({
        checkboxStatus,
        currentStatus,
        mutateStyle: 'bgColor',
      })};
    font-weight: bold;

    &:checked + label {
    }
  }
`;
